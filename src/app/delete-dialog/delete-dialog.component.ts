import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor() { }


  @Input() quote!: Quote;
  @Output() public hakikisha = new EventEmitter<object>();
  deleteQ(confirm:boolean,value:number) {
    this.hakikisha.emit(this.hakikisha)
   alert("jj")
  }

  ngOnInit(): void {
  }

}
