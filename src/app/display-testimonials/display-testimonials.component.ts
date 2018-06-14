import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../testimonial';
import { TestimonialsService } from '../testimonials.service';

@Component({
  selector: 'app-display-testimonials',
  templateUrl: './display-testimonials.component.html',
  styleUrls: ['./display-testimonials.component.css']
})
export class DisplayTestimonialsComponent implements OnInit {

  testimonials: Testimonial[];

  constructor(private testimonialsService: TestimonialsService ) { 

  }

  ngOnInit() {
    this.testimonialsService.getTestimonial().subscribe(results => this.testimonials = results);

  }

}
