import { Component, OnInit, Input } from '@angular/core';
import { EvAl } from './ev-al';

@Component({
  selector: 'app-al-mn',
  templateUrl: './al-mn.component.html',
  styleUrls: ['./al-mn.component.css']
})
export class AlMnComponent implements OnInit {

  @Input()
  al : EvAl

  constructor() { }

  ngOnInit() {
  }
}
