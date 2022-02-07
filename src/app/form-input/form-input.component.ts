import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  
  newQuote = new Quote(0,"","","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();


  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","","",new Date(),0,0);
  }

  
  constructor() { }

  ngOnInit(): void {

  }

}


