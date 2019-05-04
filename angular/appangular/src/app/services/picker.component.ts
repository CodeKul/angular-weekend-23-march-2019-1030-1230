import { AlService } from './al.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  template: `
  <div class="row">
  <div class="col-md-12">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Please Pick the Alert</h5>
        <div class="alert alert-primary" role="alert" (click)="onPick('alert alert-primary')">
          A simple primary alert—check it out!
        </div>
        <div class="alert alert-secondary" role="alert" (click)="onPick('alert alert-secondary')">
          A simple secondary alert—check it out!
        </div>
        <div class="alert alert-success" role="alert" (click)="onPick('alert alert-success')">
          A simple success alert—check it out!
        </div>
        <div class="alert alert-danger" role="alert" (click)="onPick('alert alert-danger')">
          A simple danger alert—check it out!
        </div>
        <div class="alert alert-warning" role="alert" (click)="onPick('alert alert-warning')">
          A simple warning alert—check it out!
        </div>
        <div class="alert alert-info" role="alert" (click)="onPick('alert alert-info')">
          A simple info alert—check it out!
        </div>
        <div class="alert alert-light" role="alert" (click)="onPick('alert alert-light')">
          A simple light alert—check it out!
        </div>
        <div class="alert alert-dark" role="alert" (click)="onPick('alert alert-dark')">
          A simple dark alert—check it out!
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PickerComponent implements OnInit {

  constructor(
    private alSv : AlService
  ) { }

  ngOnInit() {
  }

  onPick(al : string) {
    this.alSv.publishAl(al)
  }
}
