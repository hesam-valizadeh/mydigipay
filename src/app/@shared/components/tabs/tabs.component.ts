import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-tabs',
	imports: [],
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
	@Input() public tabs: { id: string; title: string; mode: string }[] = [];
	@Input() public activeTabId: string = '';
	@Output() public tabChange = new EventEmitter<string>();

	public onTabClick(tabId: string): void {
		this.activeTabId = tabId;
		this.tabChange.emit(tabId);
	}
}
