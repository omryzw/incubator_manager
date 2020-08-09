import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  cname = '';
  loadeggs = '';
  isSuccess : boolean;
  isFail: boolean;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  reset() {
    this.isSuccess = false;
    this.isFail = false;
    this.cname = '';
    this.loadeggs = '';

  }

  addProject() {
    
    this.data.addProject(this.cname,this.loadeggs)
    .subscribe(data => {
      if(data == 1) {
        this.isSuccess = true;
      } else {
        this.isFail = true;
      }
    });

    this.reset();
  }

  
}
