import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
    { path: '', component: StaffComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule {

}