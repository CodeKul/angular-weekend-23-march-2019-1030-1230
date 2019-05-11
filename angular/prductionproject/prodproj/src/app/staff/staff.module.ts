import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { PayrollService } from './payroll.service';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule
  ],
  providers : [PayrollService]
})
export class StaffModule { }
