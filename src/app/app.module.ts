import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
// other imports
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Add this

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,       // add this
    HttpClientModule   // Add here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
