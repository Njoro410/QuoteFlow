import { Directive,ElementRef, HostListener,Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  @Input() quote!: Quote;
  
  constructor(private elem:ElementRef) {} 

  @HostListener ("click") onClick() {
    for (var i = 0;i<=this.quote.id;i++) {
    this.mostLiked("underline")
    }
  }

  

  private mostLiked(like:string) {
    this.elem.nativeElement.style.textDecoration = like;
  }
    
  }


