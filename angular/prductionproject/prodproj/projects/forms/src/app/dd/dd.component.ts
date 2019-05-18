import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    this.frmGrp = this.fb.group({

    })
    console.log(this.frmGrp)
  }
}
