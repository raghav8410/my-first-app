import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serves',
  templateUrl: './serves.component.html',
  styleUrls: ['./serves.component.css']
})
export class ServesComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created";
  serverName = '';
  serverCreated: boolean = false;
  dummyArray = ['test', 'test1'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } , 2000)
   }

  ngOnInit(): void {
  }

  onServerCreated(){
    this.dummyArray.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created with name " + this.serverName;
  }

}
