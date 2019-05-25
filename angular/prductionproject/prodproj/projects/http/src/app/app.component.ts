import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Data, OneDto, ManyDto } from './domain/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  data: Data
  users: Array<Data>

  constructor(
    private rest: RestService
  ) {

  }

  getOne() {
    this.rest.getOne(1).subscribe(
      res => {
        let dto = res as OneDto
        this.data = dto.data
        this.rest.createUser(this.data).subscribe(
          res => console.log(res)
        )
      }
    )
  }

  manyUsers() {
    this.rest.getMany().subscribe(
      res => {
        let dto = res as ManyDto
        this.users = dto.data
      }
    )
  }

}
