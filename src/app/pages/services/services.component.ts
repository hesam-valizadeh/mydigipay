import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListModel } from '@core/models/list-model';
import { CarouselBannerComponent } from 'src/app/components/carousel-banner/carousel-banner.component';
import { SquareBanner } from 'src/app/components/square-banner/square-banner.component';
import { CarouselBannerServicesComponent } from 'src/app/components/carousel-banner-services/carousel-banner-services.component';
import { ServicesItemComponent } from '@shared/components/services-item/services-item.component';
import { IServiceItemInterface } from '@core/models/interfaces/services-item.interface';
import { TwoRowSliderComponent } from 'src/app/components/two-row-slider/two-row-slider.component';
import { ITwoRowSlide } from '@core/models/interfaces/two-row-slider.interface';
import { NgOptimizedImage } from '@angular/common';
import { ServiceItemCarouselComponent } from '@shared/components/service-item-carousel/service-item-carousel.component';

@Component({
	selector: 'app-services',
	imports: [
		CarouselBannerComponent,
		SquareBanner,
		CarouselBannerServicesComponent,
		ServicesItemComponent,
		TwoRowSliderComponent,
		NgOptimizedImage,
		ServiceItemCarouselComponent,
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
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'قبض همراه  اول',
			src: 'assets/images/services/mci.png',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'قبض ایرانسل',
			src: 'assets/images/services/mtn.png',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'قبض رایتل',
			src: 'assets/images/services/rightel.png',
		},
	];
	public bills: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'آب',
			src: 'assets/images/services/ab.webp',
		},
		{
			id: 2,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'برق',
			src: 'assets/images/services/bargh.webp',
		},
		{
			id: 3,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'اداره گاز',
			src: 'assets/images/services/gaz.webp',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0F53ED 11.43%,#94BFFF 92.87%)',
			title: 'مخابرات',
			src: 'assets/images/services/mokhaberat.webp',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'همراه اول',
			src: 'assets/images/services/hamrah.svg',
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
	public charityListUp: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'خانه ای بی',
			src: 'assets/images/services/001.webp',
		},
		{
			id: 2,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'محک',
			src: 'assets/images/services/002.webp',
		},
		{
			id: 3,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'کودکان‌کار',
			src: 'assets/images/services/003.webp',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'بنیاد کودک',
			src: 'assets/images/services/004.webp',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'بهنام دهش‌پور',
			src: 'assets/images/services/005.webp',
		},
		{
			id: 6,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'کهریزک',
			src: 'assets/images/services/006.webp',
		},
		{
			id: 7,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'یاوران ایتام',
			src: 'assets/images/services/007.webp',
		},
		{
			id: 8,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'مهرانه',
			src: 'assets/images/services/008.webp',
		},
		{
			id: 9,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'کودکان‌کمک',
			src: 'assets/images/services/009.webp',
		},
		{
			id: 10,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'سمر',
			src: 'assets/images/services/010.webp',
		},
		{
			id: 11,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'اشرف‌الانبیا',
			src: 'assets/images/services/011.webp',
		},
		{
			id: 12,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'دیابت‌گابریک',
			src: 'assets/images/services/012.webp',
		},
		{
			id: 13,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'موج مهربانی',
			src: 'assets/images/services/013.webp',
		},
	];
	public charityListDown: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'خانه ای بی',
			src: 'assets/images/services/1.webp',
		},
		{
			id: 2,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'محک',
			src: 'assets/images/services/2.webp',
		},
		{
			id: 3,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'کودکان‌کار',
			src: 'assets/images/services/3.webp',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'بنیاد کودک',
			src: 'assets/images/services/4.webp',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'بهنام دهش‌پور',
			src: 'assets/images/services/5.webp',
		},
		{
			id: 6,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'کهریزک',
			src: 'assets/images/services/6.webp',
		},
		{
			id: 7,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'یاوران ایتام',
			src: 'assets/images/services/7.webp',
		},
		{
			id: 8,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'مهرانه',
			src: 'assets/images/services/8.webp',
		},
		{
			id: 9,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'کودکان‌کمک',
			src: 'assets/images/services/9.webp',
		},
		{
			id: 10,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'سمر',
			src: 'assets/images/services/10.webp',
		},
		{
			id: 11,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'اشرف‌الانبیا',
			src: 'assets/images/services/11.webp',
		},
		{
			id: 12,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'دیابت‌گابریک',
			src: 'assets/images/services/12.webp',
		},
		{
			id: 13,
			link: '#',
			icon: '',
			colorIcon: '',
			title: 'موج مهربانی',
			src: 'assets/images/services/13.webp',
		},
	];
	public insuranceSlides: ITwoRowSlide[] = [
		{
			id: 1,
			rowUp: this.charityListUp[0],
			rowDown: this.charityListDown[0],
		},
		{
			id: 2,
			rowUp: this.charityListUp[1],
			rowDown: this.charityListDown[1],
		},
		{
			id: 3,
			rowUp: this.charityListUp[2],
			rowDown: this.charityListDown[2],
		},
		{
			id: 4,
			rowUp: this.charityListUp[3],
			rowDown: this.charityListDown[3],
		},
		{
			id: 5,
			rowUp: this.charityListUp[4],
			rowDown: this.charityListDown[4],
		},
		{
			id: 6,
			rowUp: this.charityListUp[5],
			rowDown: this.charityListDown[5],
		},
		{
			id: 7,
			rowUp: this.charityListUp[6],
			rowDown: this.charityListDown[6],
		},
		{
			id: 8,
			rowUp: this.charityListUp[7],
			rowDown: this.charityListDown[7],
		},
		{
			id: 9,
			rowUp: this.charityListUp[8],
			rowDown: this.charityListDown[8],
		},
		{
			id: 10,
			rowUp: this.charityListUp[9],
			rowDown: this.charityListDown[9],
		},
		{
			id: 11,
			rowUp: this.charityListUp[10],
			rowDown: this.charityListDown[10],
		},
		{
			id: 12,
			rowUp: this.charityListUp[11],
			rowDown: this.charityListDown[11],
		},
		{
			id: 13,
			rowUp: this.charityListUp[12],
			rowDown: this.charityListDown[12],
		},
	];

	public sliderConfigTwoRow = {
		slidesPerView: 5.6,
		spaceBetween: 20,
		loop: false,
		autoplayDelay: 3000,
		pagination: false,
		navigation: false,
	};
	public serviceItemCarousel = {
		slidesPerView: 5,
		spaceBetween: 10,
		pagination: false,
		navigation: false,
		loop: false,
		breakpoints: {
			300: {
				slidesPerView: 3.2,
				spaceBetween: 8,
				pagination: false,
				navigation: false,
				loop: false,
			},
			500: {
				slidesPerView: 4.8,
				spaceBetween: 8,
				pagination: false,
				navigation: false,
				loop: false,
			},
			700: {
				slidesPerView: 6,
				spaceBetween: 8,
				pagination: false,
				navigation: false,
				loop: false,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 15,
				pagination: false,
				navigation: false,
				loop: false,
			},
		},
	};
}
