import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  usId: string
  tm: string
  otp: string

  constructor(
    private acRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.acRt.params.subscribe(
      prm => this.usId = prm['usId']
    )

    this.acRt.queryParams.subscribe(prms => {
      this.tm = prms['tm']
      this.otp = prms['otp']
    })
  }
}
