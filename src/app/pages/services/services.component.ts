import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListModel } from '@core/models/list-model';
import { SwiperOptions } from 'swiper/types';
import { CarouselBannerComponent } from 'src/app/components/carousel-banner/carousel-banner.component';
import { SquareBanner } from 'src/app/components/square-banner/square-banner.component';
import { CarouselBannerServicesComponent } from 'src/app/components/carousel-banner-services/carousel-banner-services.component';
import { ServicesItemComponent } from '@shared/components/services-item/services-item.component';
import { IServiceItemInterface } from '../../@core/models/interfaces/services-item.interface';

@Component({
	selector: 'app-services',
	imports: [
		CarouselBannerComponent,
		SquareBanner,
		CarouselBannerServicesComponent,
		ServicesItemComponent,
	],
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
	public paymentList: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: 'icon-receipt-bill-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'پرداخت قبض',
		},
		{
			id: 2,
			link: '#',
			icon: 'icon-wallet-in-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'مدیریت کیف پول',
		},
		{
			id: 3,
			link: '#',
			icon: 'icon-scan-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'بارکدخوان',
		},
		{
			id: 4,
			link: '#',
			icon: 'icon-card-to-card-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'کارت به کارت',
		},
		{
			id: 5,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
	];

	public mobileList: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: 'icon-network-bold',
			colorIcon: 'linear-gradient(224deg,#F7883F 11.43%,#FBC917 92.87%)',
			title: 'بسته اینترنت',
		},
		{
			id: 2,
			link: '#',
			icon: 'icon-simcard-bold',
			colorIcon: 'linear-gradient(224deg,#F7883F 11.43%,#FBC917 92.87%)',
			title: 'خرید شارژ',
		},
		{
			id: 3,
			link: '#',
			icon: 'icon-scan-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'قبض همراه  اول',
		},
		{
			id: 4,
			link: '#',
			icon: 'icon-card-to-card-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'قبض ایرانسل',
		},
		{
			id: 5,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'قبض رایتل',
		},
	];
	public bills: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: 'icon-receipt-bill-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'آب',
		},
		{
			id: 2,
			link: '#',
			icon: 'icon-wallet-in-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'برق',
		},
		{
			id: 3,
			link: '#',
			icon: 'icon-scan-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'اداره گاز',
		},
		{
			id: 4,
			link: '#',
			icon: 'icon-card-to-card-bold',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'مخابرات',
		},
		{
			id: 5,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'همراه اول',
		},
	];
	public insurancesList: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: 'icon icon-digital-device-bold',
			colorIcon: 'linear-gradient(224deg,#0E0C7C 11.43%,#89A7EC 92.87%)',
			title: 'بیمه موبایل',
		},
		{
			id: 2,
			link: '#',
			icon: 'icon-car-bold',
			colorIcon: 'linear-gradient(224deg,#0E0C7C 11.43%,#89A7EC 92.87%)',
			title: 'بیمه شخص ثالث',
		},
		{
			id: 3,
			link: '#',
			icon: 'icon-insurance-bold',
			colorIcon: 'linear-gradient(224deg,#0E0C7C 11.43%,#89A7EC 92.87%)',
			title: 'بیمه‌نامه‌ها',
		},
		{
			id: 4,
			link: '#',
			icon: 'icon-car-crash-bold',
			colorIcon: 'linear-gradient(224deg,#0E0C7C 11.43%,#89A7EC 92.87%)',
			title: 'بیمه بدنه خودرو',
		},
	];

	public automobiles: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: 'icon-traffic-signal-bold',
			colorIcon: 'linear-gradient(224deg,#242E41 11.43%,#606C83 92.87%)',
			title: 'خلافی',
		},
		{
			id: 2,
			link: '#',
			icon: 'icon-highway-bold',
			colorIcon: 'linear-gradient(224deg,#242E41 11.43%,#606C83 92.87%)',
			title: 'عوارض جاده‌‌ای',
		},
		{
			id: 3,
			link: '#',
			icon: 'icon-car-bold',
			colorIcon: 'linear-gradient(224deg,#0E0C7C 11.43%,#89A7EC 92.87%)',
			title: 'بیمه شخص ثالث',
		},
		{
			id: 4,
			link: '#',
			icon: 'icon-car-crash-bold',
			colorIcon: 'linear-gradient(224deg,#0E0C7C 11.43%,#89A7EC 92.87%)',
			title: 'بیمه بدنه خودرو',
		},
	];

	public wealth: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: 'icon-bar-chart-upward-bold',
			colorIcon: 'linear-gradient(224deg,#14A654 11.43%,#79FAB2 92.87%)',
			title: 'سرمایه‌گذاری',
		},
		{
			id: 2,
			link: '#',
			icon: 'icon-chart-three-line-bold',
			colorIcon: 'linear-gradient(224deg,#14A654 11.43%,#79FAB2 92.87%)',
			title: 'صندوق‌های سرمایه‌گذاری',
		},
		{
			id: 3,
			link: '#',
			icon: 'icon-gold-bag-bold',
			colorIcon: 'linear-gradient(224deg,#14A654 11.43%,#79FAB2 92.87%)',
			title: 'سرمایه‌گذاری طلا',
		},
		{
			id: 4,
			link: '#',
			icon: 'icon-crowd-funding-bold',
			colorIcon: 'linear-gradient(224deg,#14A654 11.43%,#79FAB2 92.87%)',
			title: 'تامین مالی جمعی',
		},
	];

	public slider?: ListModel<unknown> = new ListModel<unknown>([
		{
			id: 1,
			image: 'assets/images/01.webp',
		},
	]);
	public SwiperConfig: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 6,
		centeredSlides: false,
		grabCursor: true,
		loopPreventsSliding: false,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		injectStyles: [],
		breakpoints: {},
	};
}
