import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccsesAlertComponent } from './components/succses-alert/succses-alert.component';
import { Assigment41Component } from './components/assigment41/assigment41.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccsesAlertComponent,
    Assigment41Component,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
