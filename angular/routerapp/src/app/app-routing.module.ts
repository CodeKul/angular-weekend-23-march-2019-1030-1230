import { UserGuard } from './add-mobile/user.guard';
import { ProfileComponent } from './dash/profile.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { DashComponent } from './dash/dash.component';
import { NfComponent } from './nf/nf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { FriendsComponent } from './dash/friends.component';

const dashRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent }
]
const routes: Routes = [
  { path: '', component: OtpComponent },
  { path: 'dash/:usId', component: DashComponent, children: dashRoutes, canActivate: [UserGuard] },
  { path: 'dash', redirectTo: 'dash/456', pathMatch: 'full' },
  { path: 'addmobile/:mob', component: AddMobileComponent, canActivate: [UserGuard] },
  { path: '**', component: NfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
