import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormsModule } from '@angular/forms';
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
    new Quote(1,'Brian Njoroge','Nelson Mandela','Freedom is a highway','Justice',new Date(2022,2,6),0,0),
    new Quote(2,'Alex Letto', 'Jomo Kenyatta','We will prevail','Freedom',new Date(2022,7,2),0,0),
  ];
  
  addNewQuote(quote: Quote) {
    let arraySize = this.quotes.length;
    quote.id = arraySize+1;
    quote.datePosted = new Date(quote.datePosted)

    this.quotes.push(quote)
  }

  @Output() isComplete = new EventEmitter<boolean>();
  displayInfo(index:any) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }



  ngOnInit(): void {
  }

}
