import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { CustomHeaderComponent } from './my-grid-application/custom-header/header.component';

import { DataService } from './@services/get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([CustomHeaderComponent])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
