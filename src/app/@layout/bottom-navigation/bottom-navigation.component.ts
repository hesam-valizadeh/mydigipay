import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { routerLinksPath } from '../../@core/constants/router-links';
import { RouterLink } from '@angular/router';
import { INavigationItem } from './model/navigation-item.interface';

@Component({
	selector: 'app-bottom-navigation',
	imports: [RouterLink],
	templateUrl: './bottom-navigation.component.html',
	styleUrl: './bottom-navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomNavigationComponent {
	@Input() public navItems: INavigationItem[] = [];
	@Input() public activeRoute: string = '';
	protected readonly routerLinksPath = routerLinksPath;
	public getIconName(item: INavigationItem): string {
		return `${item.icon}-${item.linear ? 'linear' : 'bold'}`;
	}
}
