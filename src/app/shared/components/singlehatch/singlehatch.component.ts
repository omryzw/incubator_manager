import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-singlehatch',
  templateUrl: './singlehatch.component.html',
  styleUrls: ['./singlehatch.component.scss']
})
export class SinglehatchComponent implements OnInit {

  $projects : Object;
  pid : '';
  hatched = '';
  comments = '';
  isSuccess: boolean;
  isFail: boolean;
  goBack = false;
  nohatched: number;
  loadeggs: number;
  srate:number;


  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.route.params.subscribe(params => this.pid = params.id);
    this.data.getSingleProject(this.pid)
    .subscribe(data => {
      this.$projects = data;
      this.loadeggs = data[0].loadeggs;
    });
   }


  ngOnInit(): void {
  }

  addHatchedRecord() {
    this.reset();
    this.data.addHatched(this.nohatched,this.comments,this.pid, this.srate)
    .subscribe(data => {
      if(data == 1 ) {
        this.isSuccess = true;
        this.comments = '';
        this.srate = 0;
        this.nohatched = 0;
        this.goBack = true;
      } else {
        this.isFail = true;
      }
    });
  }

  onSearchChange(nhatched: number): void {
    this.srate = (nhatched / this.loadeggs) * 100;
  }

  reset() {
    this.isSuccess = false;
    this.isFail = false;
  }

  goToList() {
    this.router.navigate(['hatching'])
  }
}

