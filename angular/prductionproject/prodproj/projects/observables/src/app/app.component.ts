import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './obs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observables';
  obsSub: Subscription

  constructor(
    private service: ObsService
  ) {

  }

  ngOnInit() {
    this.obsSub = this.service.myObs().subscribe(
      it => console.log(it),
      err => console.log(err),
      () => console.log(`Processing Completed`)
    )
  }

  ngOnDestroy() {
    this.obsSub.unsubscribe()
  }
}
