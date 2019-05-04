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
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServicesComponent } from './services/services.component';
import { IotService } from './services/iot.service';

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
    AlMnComponent,
    DirectivesComponent,
    SizerDirective,
    UnlessDirective,
    LifecycleComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
