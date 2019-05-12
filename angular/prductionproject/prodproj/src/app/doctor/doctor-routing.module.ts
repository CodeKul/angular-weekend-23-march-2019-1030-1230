import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
    { path: '', component: DoctorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule {

}