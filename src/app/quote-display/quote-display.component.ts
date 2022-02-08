import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Quote } from '../quote';



@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quote!: Quote;

  constructor(public dialog:MatDialog) {}



  quotes: Quote[] = [
    new Quote(1,'Cynthia','Nelson Mandela','Freedom is a highway','Justice',new Date(2020,7,12),8,0),
    new Quote(2,'John', 'Jomo Kenyatta','We will prevail','Independence',new Date(2021,7,2),2,0),
    new Quote(3,'Pete','Martin Luther','bla bla bla bla bla','Racism',new Date(2022,0,20),15,0)
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
