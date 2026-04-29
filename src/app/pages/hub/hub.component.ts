// hub.component.ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationComponent } from '@layout/bottom-navigation/bottom-navigation.component';
import { INavigationItem } from '@layout/bottom-navigation/model/navigation-item.interface';

@Component({
	selector: 'app-hub',
	imports: [BottomNavigationComponent, RouterOutlet],
	templateUrl: './hub.component.html',
	styleUrl: './hub.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HubComponent {
	// 1. public properties
	public hubMenu: INavigationItem[] = [
		{ routerLink: '/hub/services', icon: 'more', label: 'خدمات', exact: true, linear: true },
		{
			routerLink: '/hub/stores',
			icon: 'bag',
			label: 'فروشگاه‌ها',
			queryParams: { mode: 'online' },
			linear: true,
		},
		{ routerLink: '/hub/transactions', icon: 'card-to-card', label: 'پرداخت', linear: true },
		{ routerLink: '/hub/profile', icon: 'person', label: 'پروفایل', linear: true },
	];

	// 2. public getters
	public get dynamicMenu(): INavigationItem[] {
		return this.hubMenu.map((item) => this.getItemWithLinearState(item));
	}

	// 3. private properties
	private router = inject(Router);

	// 4. public methods
	public getItemWithLinearState(item: INavigationItem): INavigationItem {
		const isActive = this.isRouteActive(item.routerLink, item.exact);
		return {
			...item,
			linear: !isActive,
		};
	}

	// 5. private methods
	private getRouterLinkString(routerLink: string | unknown[]): string {
		if (typeof routerLink === 'string') {
			return routerLink;
		}
		if (Array.isArray(routerLink) && routerLink.length > 0) {
			return routerLink[0] as string;
		}
		return '';
	}

	private isRouteActive(routerLink: string | unknown[], exact?: boolean): boolean {
		const currentUrl = this.router.url;
		const link = this.getRouterLinkString(routerLink);

		if (!link) return false;

		if (exact === true) {
			return currentUrl === link;
		}
		return currentUrl.startsWith(link);
	}
}
