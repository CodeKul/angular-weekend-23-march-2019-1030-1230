import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    NgbModule,
    Ng2SmartTableModule
  ], exports: [DoctorComponent]
})
export class DoctorModule { }
