import { Injectable } from '@angular/core';
import { Faq } from './faq';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faq: Faq[] = [
    {
      id: 1,
      question: 'Do you have emergency services available?',
      answer: 'Yes, we do have list of entire doctors or medical staff working for Hospital',
      createdate: new Date('2018-06-10'),
      display: true
    },
    
    {
      id: 2,
      question: 'How many departments you have?',
      answer: 'We have 10 departments',
      createdate: new Date('2018-06-11'),
      display: true
    },
    {
      id: 3,
      question: 'Where is your location',
      answer: '205 humber college blvd.',
      createdate: new Date('2018-06-12'),
      display: true
    },
    {
      id: 4,
      question: 'Parking is free or not in hospital?',
      answer: 'Parking is free.',
      createdate: new Date('2018-06-12'),
      display: false
    }
  ];
  //return frequently asked questions (faq)
  getFaq():Observable<Faq[]>{
    let output: Faq[] = [];
    for(let f of this.faq){
      if(f.display===true){
        output.push(f);
      }
    }
    return of(output);
  }
  constructor() { }
}
