import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Reg } from './reg';
import { RegValidators } from './reg.validators';

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

    let usNmVlds = Validators.compose([
      Validators.required,
      RegValidators.isStartWithA
    ])
    let emlVlds = Validators.compose([
      Validators.required,
      Validators.email
    ])
    this.frmGrp = this.fb.group({
      usNm: this.fb.control('', usNmVlds),
      eml: this.fb.control('', emlVlds),
      pass: this.fb.control('', Validators.required),
    })
    console.log(this.frmGrp)
  }

  onSub() {
    //this.frmGrp.patchValue({ 'usNm': 'java' });
    console.log(this.frmGrp)
  }
}
