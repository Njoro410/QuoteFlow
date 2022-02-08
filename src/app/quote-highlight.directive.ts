import { Directive,ElementRef } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

    quote!: Quote
  constructor(private elem:ElementRef) { 
    if(this.quote.likes>50) {
      this.elem.nativeElement.style.textDecoration='line-through';
    }
    
  }

}
