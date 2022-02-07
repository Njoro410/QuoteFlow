import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quote;

  constructor() { }

    thumbsUp() {
      this.quote.likes = this.quote.likes+1;
    }
    thumbsDown() {
      this.quote.dislike = this.quote.dislike-1;
    }


  ngOnInit(): void {
  }

}
