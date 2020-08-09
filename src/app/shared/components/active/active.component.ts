import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';



@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  $projects: Object;

  constructor(private data: DataService) { 
   this.data.getActive()
   .subscribe(data => {
     this.$projects = data;
   })
  }

  ngOnInit(): void {
  }

}
