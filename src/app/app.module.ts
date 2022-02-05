import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteHighlightDirective } from './quote-highlight.directive';
import { TimelapsePipe } from './timelapse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    QuoteDisplayComponent,
    QuoteDetailsComponent,
    QuoteHighlightDirective,
    TimelapsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
