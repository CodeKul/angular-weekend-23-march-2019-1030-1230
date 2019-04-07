import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
