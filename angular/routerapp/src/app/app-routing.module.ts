import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { DashComponent } from './dash/dash.component';
import { NfComponent } from './nf/nf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: '', component: OtpComponent },
  { path: 'dash', component: DashComponent },
  { path: 'addmobile', component: AddMobileComponent },
  { path: '**', component: NfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
