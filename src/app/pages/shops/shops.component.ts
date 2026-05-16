import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsComponent } from '@shared/components/tabs/tabs.component';
import { ServiceItemCarouselComponent } from '@shared/components/service-item-carousel/service-item-carousel.component';
import { IServiceItemInterface } from '@core/models/interfaces/services-item.interface';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';
import { TwoRowSliderComponent } from '../../components/two-row-slider/two-row-slider.component';
import { ITwoRowSlide } from '@core/models/interfaces/two-row-slider.interface';
import { ProductSectionComponent } from 'src/app/components/product-section/product-section.component';
import { IHomePageViewDataInterface } from 'src/app/view-models/home-page-view-data.interface';
import { homeData } from '../home/constants/home-data.const';
import { ListModel } from '@core/models/list-model';
import { IncredibleDiscountBoxComponent } from '@shared/components/incredible-discount-box/incredible-discount-box.component';

@Component({
	selector: 'app-shops',
	imports: [
		TabsComponent,
		ServiceItemCarouselComponent,
		CarouselBannerComponent,
		TwoRowSliderComponent,
		ProductSectionComponent,
		IncredibleDiscountBoxComponent,
	],
	templateUrl: './shops.component.html',
	styleUrl: './shops.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent implements OnInit {
	public data: IHomePageViewDataInterface = homeData;
	public get sections(): Array<{ id: number; category?: string; products: ListModel<unknown> }> {
		const data = this.data;
		return Object.keys(data).map((key, index) => {
			const section = data[key as keyof IHomePageViewDataInterface];
			return {
				id: index + 1,
				category: section?.category,
				products: new ListModel(section?.sliderProducts),
				link: section?.link ?? null,
			};
		});
	}
	public paymentList: IServiceItemInterface[] = [
		{
			id: 1,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/01.webp',
			title: 'سلامت و روان',
		},
		{
			id: 2,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/02.webp',
			title: 'خدمات',
		},
		{
			id: 3,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/03.webp',
			title: 'حیوان خانگی',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/04.webp',
			title: 'گل و گیاه',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/05.webp',
			title: 'کافه و رستورات',
		},
		{
			id: 6,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/06.webp',
			title: 'ورزش و کمپینگ',
		},

		{
			id: 7,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/07.webp',
			title: 'خدمات اینترنت',
		},
		{
			id: 8,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/08.webp',
			title: 'فروشگاه اینترنتی',
		},
		{
			id: 9,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/09.webp',
			title: 'کالای دیجیتال',
		},
		{
			id: 10,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/10.webp',
			title: 'خانه و آشپزخانه',
		},
		{
			id: 11,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/11.webp',
			title: 'مد و پوشاک',
		},
		{
			id: 12,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/12.webp',
			title: 'زیورآلات و سکه',
		},
		{
			id: 13,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/13.webp',
			title: 'تفریح و سرگرمی',
		},
		{
			id: 14,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/14.webp',
			title: 'سفر و گردشگری',
		},

		{
			id: 15,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/15.webp',
			title: 'زیبایی و بهداشت',
		},
		{
			id: 16,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/16.webp',
			title: 'کتاب و لوازم تحریر',
		},
		{
			id: 17,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/17.webp',
			title: 'دوره های آموزشی',
		},
		{
			id: 18,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/18.webp',
			title: 'کالای مصرفی خانوار',
		},
		{
			id: 19,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/19.webp',
			title: 'خودرو و موتورسیکلت',
		},
		{
			id: 20,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/20.webp',
			title: 'هدیه و لوازم تولد',
		},
		{
			id: 21,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/21.webp',
			title: 'لوازم کودک',
		},
		{
			id: 22,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/22.webp',
			title: 'ابزارآلات و تجهیزات',
		},
	];

	public tabs = [
		{ id: 'online', title: 'فروشگاه‌های آنلاین', mode: 'online' },
		{ id: 'onsite', title: 'فروشگاه‌های حضوری', mode: 'onsite' },
	];
	public rowUpslider = [
		{
			id: 1,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/001.webp',
			title: 'بانی مد',
		},
		{
			id: 2,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/002.svg',
			title: 'دیجی کالا',
		},
		{
			id: 3,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/003.svg',
			title: 'صدور آنی بیمه',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/004.svg',
			title: 'موبایل 140',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/005.svg',
			title: 'سوپرمارکت دیجی کالا',
		},
		{
			id: 6,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/006.svg',
			title: 'آرتا الکتریک',
		},
		{
			id: 7,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/007.svg',
			title: 'جاجیگا',
		},
		{
			id: 8,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/008.svg',
			title: 'تپسی شاپ',
		},
		{
			id: 9,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/009.svg',
			title: 'طلای گلدیج',
		},
	];
	public rowDownslider = [
		{
			id: 1,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/01.webp',
			title: 'بانی مد',
		},
		{
			id: 2,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/02.webp',
			title: 'بانی مد',
		},
		{
			id: 3,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/03.webp',
			title: 'بانی مد',
		},
		{
			id: 4,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/04.svg',
			title: 'بانی مد',
		},
		{
			id: 5,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/05.svg',
			title: 'بانی مد',
		},
		{
			id: 6,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/06.svg',
			title: 'بانی مد',
		},
		{
			id: 7,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/07.svg',
			title: 'بانی مد',
		},
		{
			id: 8,
			link: '#',
			icon: '',
			colorIcon: '',
			src: 'assets/images/shops/best stores selector/08.svg',
			title: 'بانی مد',
		},
		{
			id: 9,
			link: '#',
			icon: 'icon icon-info-menu-due',
			colorIcon: '#7272ff',
			title: 'بیشتر',
		},
	];
	public insuranceSlides: ITwoRowSlide[] = [
		{
			id: 1,
			rowUp: this.rowUpslider[0],
			rowDown: this.rowDownslider[0],
		},
		{
			id: 2,
			rowUp: this.rowUpslider[1],
			rowDown: this.rowDownslider[1],
		},
		{
			id: 3,
			rowUp: this.rowUpslider[2],
			rowDown: this.rowDownslider[2],
		},
		{
			id: 4,
			rowUp: this.rowUpslider[3],
			rowDown: this.rowDownslider[3],
		},
		{
			id: 5,
			rowUp: this.rowUpslider[4],
			rowDown: this.rowDownslider[4],
		},
		{
			id: 6,
			rowUp: this.rowUpslider[5],
			rowDown: this.rowDownslider[5],
		},
		{
			id: 7,
			rowUp: this.rowUpslider[6],
			rowDown: this.rowDownslider[6],
		},
		{
			id: 8,
			rowUp: this.rowUpslider[7],
			rowDown: this.rowDownslider[7],
		},
		{
			id: 9,
			rowUp: this.rowUpslider[8],
			rowDown: this.rowDownslider[8],
		},
	];
	public sliderConfig = {
		slidesPerView: 9,
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
				slidesPerView: 11,
				spaceBetween: 0,
				pagination: false,
				navigation: false,
				autoplay: {
					delay: 3000,
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
