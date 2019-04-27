import { SimpleChanges, Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  demo: string
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges`)
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`)
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`)
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy`)
  }
  ngOnInit() {
    console.log(`ngOnInit`)
  }
}
