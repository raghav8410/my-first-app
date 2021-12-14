import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  username: String = '';
  nameField: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName(){
    this.username = '';
  }

}
