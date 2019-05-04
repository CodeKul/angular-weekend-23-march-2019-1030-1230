import { Component, OnInit } from '@angular/core';
import { IotService } from './iot.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers : [IotService]
})
export class ServicesComponent implements OnInit {

  constructor(
    private iotSv : IotService
  ) { }

  ngOnInit() {
  }

}
