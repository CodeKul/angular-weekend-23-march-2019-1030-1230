import { AdService, Ad } from './ad.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'forms';
  ads: Array<Ad> = new Array()
  curAd: Ad = {} as Ad

  constructor(
    private ad: AdService
  ) {
    this.ads.push({ nm: 'Codekul', img: 'http://www.codekul.com/img/CODEKUL-min.png' })
    this.ads.push({ nm: 'Codekul Java', img: 'http://www.codekul.com/img/tech/core_icon/earth.svg' })
    this.ads.push({ nm: 'Codekul Angular', img: 'http://www.codekul.com/img/tech/core_icon/database.svg' })
  }

  ngOnInit() {
    let cntr = 1
    this.ad.obsAds().subscribe(
      it => {
        this.curAd = this.ads[cntr++]
        console.log(this.curAd)
        if (cntr >= this.ads.length) {
          cntr = 0
        }
      }
    )
  }

  ngOnDestroy() {

  }
}
