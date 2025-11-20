// src/app/@shared/directives/skeleton.directive.ts
import { Directive, input, ElementRef, inject, afterNextRender, runInInjectionContext, Renderer2, Injector, effect } from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
  standalone: true,
  host: { '[class.skeleton-loading]': 'appSkeleton()' }
})
export class SkeletonDirective {
  appSkeleton = input(false, { transform: Boolean });
  background = input<string>('#e2e8f0');
  highlight = input<string>('#f1f5f9');
  borderRadius = input<string>('8px');
  height = input<string | null>(null);
  width = input<string | null>(null);

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private injector = inject(Injector);

  constructor() {
    afterNextRender(() => {
      // ← راه‌حل رسمی Angular 20
      runInInjectionContext(this.injector, () => {
        effect(() => {
          if (this.appSkeleton()) {
            this.apply();
            this.addShimmer();
          } else {
            this.remove();
          }
        });
      });
    });
  }

  private apply() {
    const e = this.el.nativeElement;
    this.renderer.setStyle(e, 'background-color', this.background());
    this.renderer.setStyle(e, 'border-radius', this.borderRadius());
    this.renderer.setStyle(e, 'position', 'relative');
    this.renderer.setStyle(e, 'overflow', 'hidden');
    this.renderer.setStyle(e, 'color', 'transparent');

    if (this.height()) {
      this.renderer.setStyle(e, 'height', this.height());
      this.renderer.setStyle(e, 'min-height', this.height());
    }
    if (this.width()) this.renderer.setStyle(e, 'width', this.width());

    Array.from(e.children).forEach(child => {
      this.renderer.setStyle(child, 'opacity', '0');
    });
  }

  private addShimmer() {
    const e = this.el.nativeElement;
    if (e.querySelector('.shimmer')) return;

    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'shimmer');
    this.renderer.setStyle(div, 'position', 'absolute');
    this.renderer.setStyle(div, 'top', '0');
    this.renderer.setStyle(div, 'left', '0');
    this.renderer.setStyle(div, 'width', '100%');
    this.renderer.setStyle(div, 'height', '100%');
    this.renderer.setStyle(div, 'background', `linear-gradient(90deg, transparent, ${this.highlight()}, transparent)`);
    this.renderer.setStyle(div, 'transform', 'translateX(-100%)');
    this.renderer.setStyle(div, 'animation', 'shimmer 1.8s infinite');
    this.renderer.appendChild(e, div);
  }

  private remove() {
    const e = this.el.nativeElement;

    this.renderer.removeStyle(e, 'background-color');
    this.renderer.removeStyle(e, 'border-radius');
    this.renderer.removeStyle(e, 'position');
    this.renderer.removeStyle(e, 'overflow');
    this.renderer.removeStyle(e, 'color');
    this.renderer.removeStyle(e, 'height');
    this.renderer.removeStyle(e, 'min-height');
    this.renderer.removeStyle(e, 'width');

    Array.from(e.children).forEach(child => {
      if (!(child as HTMLElement).classList.contains('shimmer')) {
        this.renderer.removeStyle(child, 'opacity');
      }
    });

    const shimmer = e.querySelector('.shimmer');
    if (shimmer) this.renderer.removeChild(e, shimmer);
  }
}