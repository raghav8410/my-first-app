import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  detail: boolean = true;
  log: Array<number> = [];
  count = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }

  displayDetail(){
    this.detail = !this.detail;
    this.log.push(this.log.length + 1);
    this.count = this.log.length;
  }

}
