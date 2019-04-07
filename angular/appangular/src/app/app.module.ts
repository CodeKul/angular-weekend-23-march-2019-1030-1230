import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstSimpleComponent } from './first-simple/first-simple.component';
import { CardComponent } from './first-sample/card.component';
import { JumboComponent } from './first-sample/jumbo.component';
import { BtnsComponent } from './first-sample/btns.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSimpleComponent,
    CardComponent,
    JumboComponent,
    BtnsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
