import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselServicesComponent } from '../../@shared/components/carousel-services/carousel-services.component';

@Component({
  selector: 'app-contact-us',
  imports: [CarouselServicesComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  public trackEffect(): void {}
}
