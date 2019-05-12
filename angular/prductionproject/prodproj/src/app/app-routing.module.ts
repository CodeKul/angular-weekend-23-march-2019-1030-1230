import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorModule' },
  { path: 'medical', loadChildren: './medical/medical.module#MedicalModule' },
  { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
