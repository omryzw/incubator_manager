import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  $projects: Object;

  constructor(private data: DataService) { 
    this.data.getHistory()
    .subscribe(data => this.$projects = data);
  }

  ngOnInit(): void {
  }

}
