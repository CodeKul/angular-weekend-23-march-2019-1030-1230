import { Component, OnInit } from '@angular/core';
import { IotService } from './iot.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers : [IotService]
})
export class ServicesComponent implements OnInit {

  crRpm : number
  constructor(
    private iotSv : IotService
  ) { }

  ngOnInit() {
  }

  rpmOp(btn : number) {
    if(btn == 1) {
      this.crRpm = this.iotSv.inc()
    } else {
      this.crRpm = this.iotSv.dec()
    }
  }

}
