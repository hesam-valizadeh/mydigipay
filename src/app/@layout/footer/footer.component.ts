import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { ReadMoreDirective } from '../../@shared/directives/read-more.directive';
import { RouterLinksPath } from '../../@core/constants/router-links';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [ReadMoreDirective,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  responsive = inject(ResponsiveService);
  protected readonly RouterLinksPath = RouterLinksPath;

}
