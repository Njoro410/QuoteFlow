import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  quoteForm !:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.quoteForm = this.formBuilder.group({
      name: ['',Validators.required],
      author: ['',Validators.required],
      quote: ['',Validators.required]
    })
  }
  addQuote() {
    console.log(this.quoteForm.value)
  }
}


