import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  AfterViewInit,
  inject,
} from '@angular/core';
const DEFAULT_MAX_LINES = 2;
@Directive({
  selector: '[appReadMore]',
  standalone: true,
})
export class ReadMoreDirective implements AfterViewInit {
  @Input() public maxLines = DEFAULT_MAX_LINES;
  @Input() public toggleButton: HTMLElement | null | undefined;
  private expanded = false;
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  public ngAfterViewInit(): void {
    this.applyClamp();
    if (this.toggleButton !== null && this.toggleButton !== undefined) {
      this.renderer.listen(this.toggleButton, 'click', (event: Event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  }

  @HostListener('click')
  public onTextClick(): void {
    if (this.toggleButton === null || this.toggleButton === undefined) {
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
    const nativeEl: HTMLElement = this.el.nativeElement;

    this.renderer.setStyle(nativeEl, 'display', '-webkit-box');
    this.renderer.setStyle(nativeEl, '-webkit-line-clamp', this.maxLines.toString());
    this.renderer.setStyle(nativeEl, '-webkit-box-orient', 'vertical');
    this.renderer.setStyle(nativeEl, 'overflow', 'hidden');
  }

  private removeClamp(): void {
    const nativeEl: HTMLElement = this.el.nativeElement;

    this.renderer.removeStyle(nativeEl, '-webkit-line-clamp');
    this.renderer.removeStyle(nativeEl, 'overflow');
  }

  private updateButtonText(text: string): void {
    if (this.toggleButton !== null && this.toggleButton !== undefined) {
      this.toggleButton.innerText = text;
    }
  }
}
