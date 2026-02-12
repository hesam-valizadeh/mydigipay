import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { ReadMoreDirective } from '../../@shared/directives/read-more.directive';
import { routerLinksPath } from '../../@core/constants/router-links';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [ReadMoreDirective, RouterLink, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public responsive = inject(ResponsiveService);
  protected readonly routerLinksPath = routerLinksPath;
  public get isMobile(): boolean {
    return this.responsive.isMobile();
  }

  public get isDesktop(): boolean {
    return this.responsive.isDesktop();
  }
}
