import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  exp = 10
  sal = 10
  name = 'android'
  date = new Date()
  obj = {
    nm: 'java',
    ver: 8,
    vendor: 'openjdk'
  }
}
