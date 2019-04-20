import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstSimpleComponent } from './first-simple/first-simple.component';
import { CardComponent } from './first-sample/card.component';
import { JumboComponent } from './first-sample/jumbo.component';
import { BtnsComponent } from './first-sample/btns.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ExtensionComponent } from './databinding/extension.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSimpleComponent,
    CardComponent,
    JumboComponent,
    BtnsComponent,
    DatabindingComponent,
    ExtensionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
