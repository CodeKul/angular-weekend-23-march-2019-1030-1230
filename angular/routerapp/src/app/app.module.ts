import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpComponent } from './otp/otp.component';
import { NfComponent } from './nf/nf.component';
import { DashComponent } from './dash/dash.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { ProfileComponent } from './dash/profile.component';
import { FriendsComponent } from './dash/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    NfComponent,
    DashComponent,
    AddMobileComponent,
    ProfileComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
