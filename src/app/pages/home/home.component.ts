import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';
import { SquareBanner } from '../../components/square-banner/square-banner.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ProductSectionComponent } from '../../components/product-section/product-section.component';

@Component({
  selector: 'app-home',
  imports: [ HeroCarouselComponent, SquareBanner, ServiceCardComponent,ProductSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
