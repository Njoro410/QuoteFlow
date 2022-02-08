import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

cat = new FormControl('',[Validators.required])
name = new FormControl('',[Validators.required])
author = new FormControl('',[Validators.required])
quote = new FormControl('',[Validators.required])
 


  

  
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


