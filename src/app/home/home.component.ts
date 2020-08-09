import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  $hatching: Object;
  avg : string;

  constructor(private router: Router, private data : DataService) { 
    this.data.getHatching()
    .subscribe(data=>{
      this.$hatching = data;
    });

    this.data.overallSuccess()
    .subscribe(data => {
      this.avg = JSON.stringify(data);
    })
  }

  ngOnInit(): void { 

  }

}
