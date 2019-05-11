import { GuardService } from './../add-mobile/guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  st : boolean = false
  constructor(
    private router: Router,
    private ser: GuardService
  ) { }

  ngOnInit() {
    this.ser.em.subscribe(st => {
      this.st = st
    })
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
