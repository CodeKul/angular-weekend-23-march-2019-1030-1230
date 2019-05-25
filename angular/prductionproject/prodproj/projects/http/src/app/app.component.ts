import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Data, OneDto } from './domain/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  data: Data

  constructor(
    private rest: RestService
  ) {

  }

  getOne() {
    this.rest.getOne(1).subscribe(
      res => {
        let dto = res as OneDto
        this.data = dto.data
      }
    )
  }
}
