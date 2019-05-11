import { PayrollService } from './../payroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(
    private ser : PayrollService
  ) { }

  ngOnInit() {
  }
}
