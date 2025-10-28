import { Component } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  cards = [
    {
      src: 'assets/images/credit.webp',
      alt: 'خدمات وام و اعتبار',
      title: 'خدمات وام و اعتبار',
      width: '256',
      height: '270',
      description: 'خرید قسطی، بدون ضامن و سپرده‌گذاری',
      link: 'دریافت اعتبار',
    },
    {
      src: 'assets/images/fintech.webp',
      alt: 'خدمات پرداخت',
      title: 'خدمات پرداخت',
      width: '256',
      height: '270',
      description: 'پرداخت و انتقال وجه، از هرجا به هرجا',
      link: 'خدمات پرداخت',
    },
    {
      src: 'assets/images/wealth.webp',
      alt: 'خدمات مدیریت ثروت',
      title: 'خدمات مدیریت ثروت',
      width: '256',
      height: '270',
      description: 'حفظ ارزش سرمایه، کم ریسک و بی‌دغدغه',
      link: 'سرمایه گذاری',
    },
    {
      src: 'assets/images/insurance.webp',
      alt: 'خدمات بیمه',
      title: 'خدمات بیمه',
      width: '256',
      height: '270',
      description: 'زندگی بدون نگرانی، با جبران هر خسارتی',
      link: 'خدمات بیمه',
    },
  ];
}
