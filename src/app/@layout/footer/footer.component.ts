import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { ReadMoreDirective } from '../../@shared/directives/read-more.directive';
import { routerLinksPath } from '../../@core/constants/router-links';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [ReadMoreDirective,RouterLink,NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  responsive = inject(ResponsiveService);
  protected readonly routerLinksPath = routerLinksPath;

}
