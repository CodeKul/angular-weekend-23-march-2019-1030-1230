import { Component, OnInit } from '@angular/core';
import { AlService } from './al.service';
import { EvAl } from '../int-cmp-com-v1/ev-al';

@Component({
  selector: 'app-maker',
  template: `
  <div class="row">
  <div class="col-md-12">
    <div style="height: 600px;" [class]="al?.al">
    </div>
    </div>
  </div>
  `,
  styles: []
})
export class MakerComponent implements OnInit {

  al: EvAl
  constructor(
    private alSv: AlService
  ) { }

  ngOnInit() {
    this.alSv.subscribeAl((evAl: EvAl) => {
      this.al = evAl
    })
  }
}
