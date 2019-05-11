import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  template: `
    <ul class="list-group">
      <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  `,
  styles: []
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
