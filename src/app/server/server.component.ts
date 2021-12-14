import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: '../server/server.component.html',
    styleUrls: ['../server/server.component.css']
}) 
export class ServerComponent{

    server: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    setComponent(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'red' : 'green';
    }
}