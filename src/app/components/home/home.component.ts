import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public task: string = "";
  public list: string[] = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript"
  ];

  constructor() { }

  ngOnInit() {
  }

  public addToList() {

    if (this.task && !this.list.includes(this.task)) {
      this.list.push(this.task);
      this.task = "";
    }
    
  }

  public removeFromList(x) {
    this.list.splice(x, 1);
  }

  public deleteAll() {
    this.list = [];
  }

}
