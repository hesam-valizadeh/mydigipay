import { Component } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  cards = [
    {
      src: "assets/images/credit.webp",
      alt: "خدمات وام و اعتبار",
      title: "خدمات وام و اعتبار",
      width: "256",
      height: "270",
      description: "",
      link: ""
    },
    {
      src: "assets/images/fintech.webp",
      alt: "خدمات وام و اعتبار",
      title: "خدمات وام و اعتبار",
      width: "256",
      height: "270",
      description: "",
      link: ""
    },
    {
      src: "assets/images/wealth.webp",
      alt: "خدمات وام و اعتبار",
      title: "خدمات وام و اعتبار",
      width: "256",
      height: "270",
      description: "",
      link: ""
    },
    {
      src: "assets/images/insurance.webp",
      alt: "خدمات وام و اعتبار",
      title: "خدمات وام و اعتبار",
      width: "256",
      height: "270",
      description: "",
      link: ""
    }
  ]
}
