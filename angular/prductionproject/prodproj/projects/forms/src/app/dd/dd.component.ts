import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reg } from './reg';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {

  frmGrp: FormGroup
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    let data: Reg = {
      usNm: 'android',
      eml: 'android',
      pass: '1234'
    }

    this.frmGrp = this.fb.group({
      usNm: this.fb.control(data.usNm),
      eml: this.fb.control(data.eml),
      pass: this.fb.control(data.pass),
    })
    console.log(this.frmGrp)
  }

  onSub() {
    this.frmGrp.patchValue({ 'usNm': 'java' });
    console.log(this.frmGrp)
  }
}
