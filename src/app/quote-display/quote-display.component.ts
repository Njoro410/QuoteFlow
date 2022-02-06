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

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(FormInputComponent, {
      width:'31.5%',
    });
  }



  ngOnInit(): void {
  }

}
