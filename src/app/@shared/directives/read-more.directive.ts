import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit, inject } from '@angular/core';

@Directive({
  selector: '[appReadMore]',
  standalone: true 
})
export class ReadMoreDirective implements AfterViewInit {
  @Input() maxLines = 2;
  @Input() toggleButton!: HTMLElement; 

  private expanded = false;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.applyClamp();

    if (this.toggleButton) {
      this.renderer.listen(this.toggleButton, 'click', (event: Event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  }

  @HostListener('click')
  onTextClick(): void {
    if (!this.toggleButton) {
      this.toggle();
    }
  }

  private toggle(): void {
    this.expanded = !this.expanded;

    if (this.expanded) {
      this.removeClamp();
      this.updateButtonText('کمتر...');
    } else {
      this.applyClamp();
      this.updateButtonText('بیشتر...');
    }
  }

  private applyClamp(): void {
    const nativeEl = this.el.nativeElement as HTMLElement; 
    
    this.renderer.setStyle(nativeEl, 'display', '-webkit-box');
    this.renderer.setStyle(nativeEl, '-webkit-line-clamp', this.maxLines.toString());
    this.renderer.setStyle(nativeEl, '-webkit-box-orient', 'vertical');
    this.renderer.setStyle(nativeEl, 'overflow', 'hidden');
  }

  private removeClamp(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;
    
    this.renderer.removeStyle(nativeEl, '-webkit-line-clamp');
    this.renderer.removeStyle(nativeEl, 'overflow');
  }

  private updateButtonText(text: string): void {
    if (this.toggleButton) {
      this.toggleButton.innerText = text;
    }
  }
}