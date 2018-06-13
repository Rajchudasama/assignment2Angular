import { Injectable } from '@angular/core';
import { Testimonial } from './testimonial';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  testimonial: Testimonial[] = [
    {
      id: 1,
      name: 'Brenie',
      review: 'Good work keep it up',
      createDate: new Date('01/01/1970'),
      IsActive: true
    }
  ];
  //returns testimonials
  getTestimonial():Observable<Testimonial[]>{
    let results: Testimonial[] = [];
    for(let t of this.testimonial){
      if(t.IsActive===true){
        results.push(t);
      }
    }
    return of(results);
  }

  constructor() { }
}
