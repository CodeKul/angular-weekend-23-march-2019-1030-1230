import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-btns',
  template: `
  <p class="text-muted"> What is View Encapsulation ? -> In Buttons </p>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  `,
  styles: [`
    
  `],
  
})
export class BtnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
