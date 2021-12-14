import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: '../server/server.component.html'
}) 
export class ServerComponent{

    server: number = 10;
    serverStatus: string = 'offline';
    randomValue : number ;

    constructor(){
        this.randomValue = Math.random();
        console.log(this.randomValue);
        this.serverStatus = this.randomValue > 0.5 ? 'online' : 'offline';
    }

    setComponent(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'red' : 'green';
    }
}