import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServesComponent } from './serves/serves.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServesComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
