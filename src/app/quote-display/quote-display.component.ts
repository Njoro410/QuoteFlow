import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormInputComponent } from '../form-input/form-input.component';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  constructor() {}



  quotes: Quote[] = [
    new Quote('Brian Njoroge','Nelson Mandela','Freedom is a highway'),
    new Quote('Alex Letto', 'Jomo Kenyatta','We will prevail'),
  ];
  
  revealQuote(index: number | number){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;

  }
  remove(deleteQuote: any, index: number) {
      if(deleteQuote) {
        this.quotes.splice(index, 1);
      }
  }

  ngOnInit(): void {
  }

}
