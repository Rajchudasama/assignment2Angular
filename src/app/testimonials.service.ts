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
      name: 'John',
      designation: 'Project manager at samco',
      review: 'Professional work and always on time',
      createDate: new Date('01/01/2018'),
      IsActive: true
    },
    {
      id: 2,
      name: 'Raj',
      designation: 'web developer at phoenix',
      review: 'always got outstanding solution',
      createDate: new Date('01/12/2018'),
      IsActive: true
    },
    {
      id: 3,
      name: 'lee',
      designation: 'Buisness owner',
      review: 'never missed deadline',
      createDate: new Date('02/07/2018'),
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
