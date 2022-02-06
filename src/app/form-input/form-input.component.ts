import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

 



  quoteForm !:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    // this.quoteForm = this.formBuilder.group({
    //   name: ['',Validators.required],
    //   author: ['',Validators.required],
    //   quote: ['',Validators.required]
    // })
  }

}


