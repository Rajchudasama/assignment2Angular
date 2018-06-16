import { Component, OnInit } from '@angular/core';
import { Faq } from '../faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq: Faq[];
  constructor(private faqService: FaqService ) { }

  ngOnInit() {
    this.faqService.getFaq().subscribe(output => this.faq = output);

  }

}
