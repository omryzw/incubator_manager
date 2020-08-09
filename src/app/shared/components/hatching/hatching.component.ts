import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hatching',
  templateUrl: './hatching.component.html',
  styleUrls: ['./hatching.component.scss']
})
export class HatchingComponent implements OnInit {

  $projects: Object;

  constructor(private data: DataService, private router: Router) { 
    this.data.getHatched()
    .subscribe(data => {
      this.$projects = data;
    })
  }

  ngOnInit(): void {
  }

  goTo(pid){
    this.router.navigate(['singlehatch/' + pid ]);
  }
}
