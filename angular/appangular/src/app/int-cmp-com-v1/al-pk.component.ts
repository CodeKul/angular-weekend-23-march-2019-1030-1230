import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EvAl } from './ev-al';

@Component({
  selector: 'app-al-pk',
  templateUrl: './al-pk.component.html',
  styleUrls: ['./al-pk.component.css']
})
export class AlPkComponent implements OnInit {

  @Output()
  picked: EventEmitter<EvAl> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onPick(al: string) {
    let evAl: EvAl = {
      al: al
    }
    this.picked.emit(evAl)
  }
}
