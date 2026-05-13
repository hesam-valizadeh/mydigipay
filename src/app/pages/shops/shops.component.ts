import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsComponent } from '@shared/components/tabs/tabs.component';
import { ServiceItemCarouselComponent } from '@shared/components/service-item-carousel/service-item-carousel.component';
import { IServiceItemInterface } from '@core/models/interfaces/services-item.interface';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';
import { TwoRowSliderComponent } from '../../components/two-row-slider/two-row-slider.component';
import { ITwoRowSlide } from '@core/models/interfaces/two-row-slider.interface';

@Component({
	selector: 'app-shops',
	imports: [
		TabsComponent,
		ServiceItemCarouselComponent,
		CarouselBannerComponent,
		TwoRowSliderComponent,
	],
	templateUrl: './shops.component.html',
	styleUrl: './shops.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent implements OnInit {
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
		{
			id: 6,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},

		{
			id: 7,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
		{
			id: 8,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
		{
			id: 9,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
		{
			id: 10,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
		{
			id: 11,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
		{
			id: 12,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
		{
			id: 13,
			link: '#',
			icon: 'icon-charity-2-bold',
			colorIcon: 'linear-gradient(224deg,#0CBABA 11.43%,#9FFBFB 92.87%)',
			title: 'خیریه',
		},
	];

	public tabs = [
		{ id: 'online', title: 'فروشگاه‌های آنلاین', mode: 'online' },
		{ id: 'onsite', title: 'فروشگاه‌های حضوری', mode: 'onsite' },
	];
	public insuranceSlides: ITwoRowSlide[] = [
		{
			id: 1,
			rowUp: this.paymentList[0],
			rowDown: this.paymentList[1],
		},
		{
			id: 2,
			rowUp: this.paymentList[2],
			rowDown: this.paymentList[3],
		},
		{
			id: 3,
			rowUp: this.paymentList[4],
			rowDown: this.paymentList[0],
		},
		{
			id: 4,
			rowUp: this.paymentList[1],
			rowDown: this.paymentList[2],
		},
		{
			id: 5,
			rowUp: this.paymentList[3],
			rowDown: this.paymentList[4],
		},
		{
			id: 6,
			rowUp: this.paymentList[3],
			rowDown: this.paymentList[4],
		},
		{
			id: 7,
			rowUp: this.paymentList[3],
			rowDown: this.paymentList[4],
		},
		{
			id: 8,
			rowUp: this.paymentList[3],
			rowDown: this.paymentList[4],
		},
	];
	public sliderConfig = {
		slidesPerView: 8,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
		},
	};
	public serviceItemCarousel = {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: false,
		navigation: false,
		loop: true,
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			700: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 10,
				pagination: false,
				navigation: false,
				effect: 'fade',
				speed: 2000,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				},
				allowTouchMove: true,
			},
		},
	};
	public activeTabId: string = 'online';
	private route = inject(ActivatedRoute);
	private router = inject(Router);

	public ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params['mode'] === 'onsite') {
				this.activeTabId = 'onsite';
			} else {
				this.activeTabId = 'online';
			}
		});
	}

	public onTabChange(tabId: string): void {
		this.activeTabId = tabId;
		const selectedTab = this.tabs.find((tab) => tab.id === tabId);
		if (selectedTab) {
			void this.router.navigate([], {
				relativeTo: this.route,
				queryParams: { mode: selectedTab.mode },
				queryParamsHandling: 'merge',
			});
		}
	}
}
