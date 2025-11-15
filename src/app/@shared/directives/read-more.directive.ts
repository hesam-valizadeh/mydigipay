import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadMore]'
})
export class ReadMoreDirective {
  @Input() maxLines = 2; // تعداد خطوط
  @Input() toggleButton!: HTMLElement; // دکمه کم/بیشتر (اختیاری)

  private expanded = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.applyClamp();

    // اگر دکمه جدا پاس دادیم
    if (this.toggleButton) {
      this.renderer.listen(this.toggleButton, 'click', (event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  }

  // اگر کاربر روی خود متن کلیک کند (آپشنال)
  @HostListener('click')
  onTextClick() {
    if (!this.toggleButton) {
      this.toggle();
    }
  }

  private toggle() {
    this.expanded = !this.expanded;

    if (this.expanded) {
      this.removeClamp();
      this.updateButtonText('کمتر...');
    } else {
      this.applyClamp();
      this.updateButtonText('بیشتر...');
    }
  }

  private applyClamp() {
    this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-line-clamp', this.maxLines);
    this.renderer.setStyle(this.el.nativeElement, '-webkit-box-orient', 'vertical');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  private removeClamp() {
    this.renderer.removeStyle(this.el.nativeElement, '-webkit-line-clamp');
    this.renderer.removeStyle(this.el.nativeElement, 'overflow');
  }

  private updateButtonText(text: string) {
    if (this.toggleButton) {
      this.toggleButton.innerText = text;
    }
  }

}
