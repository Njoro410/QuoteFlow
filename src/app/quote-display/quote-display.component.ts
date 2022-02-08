import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { QuoteHighlightDirective } from '../quote-highlight.directive';

import { Quote } from '../quote';



@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quote!: Quote;

  constructor() {}



  quotes: Quote[] = [
    new Quote(1,'Cynthia','Lao Tzu','The journey of a thousand miles begins with one step.','Motivation',new Date(2020,7,12),0,0),
    new Quote(2,'John', 'Friedrich Nietzsche','That which does not kill us makes us stronger.','Inspiration',new Date(2021,7,2),0,0),
    new Quote(3,'Pete','John Lennon','Life is what happens when you’re busy making other plans.','Life',new Date(2022,0,20),0,0)
  ];
  
  addNewQuote(quote: Quote) {
    let arraySize = this.quotes.length;
    quote.id = arraySize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  deleteQuote(index:number) {
    let confim = confirm ('are you sure you want to delete this quote?')
    if(confim) {
      this.quotes.splice(index,1); 
    }    
  }



  
  showMore(index:any) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }



  ngOnInit(): void {
  }
  

}
