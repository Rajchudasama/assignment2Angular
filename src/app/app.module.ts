import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestimonialsService } from './testimonials.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
