import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

  @Input('appUnless')
  cond: boolean

  constructor(
    private tmRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {
    console.log(this.tmRf)
    console.log(this.vcRf)
  }
  ngOnInit() {
    if (!this.cond) {
      this.vcRf.createEmbeddedView(this.tmRf)
    } else {
      this.vcRf.clear()
    }
  }
}
