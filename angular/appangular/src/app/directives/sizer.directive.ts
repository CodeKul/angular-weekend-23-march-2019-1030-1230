import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

  @HostBinding('style.border')
  private border: string;

  @Input('appSizer')
  @HostBinding('style.width.px')
  private width: number;

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
    // elRf.nativeElement.style.border = `1px solid red` // not recommended
    // rend.setStyle(elRf.nativeElement, 'border', '1px solid red')
    // this.border = '1px solid red'
    // this.width = 600
  }

  @HostListener('mouseenter')
  onIn() {
    this.width = 600
  }

  @HostListener('mouseleave')
  onOut() {
    this.width = 150
  }
}
