import { MedicalModule } from './medical/medical.module';
import { StaffModule } from './staff/staff.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoctorModule,
    PatientModule,
    StaffModule,
    MedicalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
