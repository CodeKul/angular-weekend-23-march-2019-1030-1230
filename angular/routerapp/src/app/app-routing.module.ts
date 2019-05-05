import { NfComponent } from './nf/nf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: '', component: OtpComponent },


  { path: '**', component : NfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
