import { Directive,ElementRef, HostListener,Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  @Input() quote!: Quote;
  constructor(private elem:ElementRef) {} 


  

  private mostLiked(like:number) {
    this.elem.nativeElement.style.boxShadow = like;
  }
    
  }


