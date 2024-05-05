import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppComponent,
    HttpClientModule,
    IonicModule.forRoot(),
  ]
})
export class AppModule { }
