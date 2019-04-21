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
import { LocalRefContVwChildComponent } from './local-ref-cont-vw-child/local-ref-cont-vw-child.component';
import { CustAltComponent } from './cust-alt/cust-alt.component';
import { IntCmpComV1Component } from './int-cmp-com-v1/int-cmp-com-v1.component';
import { AlPkComponent } from './int-cmp-com-v1/al-pk.component';
import { AlMnComponent } from './int-cmp-com-v1/al-mn.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSimpleComponent,
    CardComponent,
    JumboComponent,
    BtnsComponent,
    DatabindingComponent,
    ExtensionComponent,
    LocalRefContVwChildComponent,
    CustAltComponent,
    IntCmpComV1Component,
    AlPkComponent,
    AlMnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
