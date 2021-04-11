import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  DateTimeNow: string = new Date().toJSON().substr(0, 16);

  constructor() { }

  ngOnInit(): void {
    console.log(this.DateTimeNow);
  }

}
