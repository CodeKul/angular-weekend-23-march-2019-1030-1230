import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onOtp(mob: string, otp: string) {
    this.router.navigate(['dash', mob], {
      queryParams: {
        tm: new Date().getTime(),
        otp: otp
      }
    })
  }
}
