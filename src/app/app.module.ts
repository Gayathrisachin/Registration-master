import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
// import { ConfirmedValidator } from './confirmed.validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ConfirmedValidator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
