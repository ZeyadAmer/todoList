import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { CommonModule } from '@angular/common'; // Required for ngClass

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, // Make sure FormsModule is imported
    CommonModule, // Make sure CommonModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
