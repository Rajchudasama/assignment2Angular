import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestimonialsService } from './testimonials.service';

import { AppComponent } from './app.component';
import { DisplayTestimonialsComponent } from './display-testimonials/display-testimonials.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTestimonialsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
