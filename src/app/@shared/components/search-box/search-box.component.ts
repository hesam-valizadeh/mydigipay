import { Component, ChangeDetectionStrategy, ElementRef, HostListener, inject, signal } from '@angular/core';
import { ResponsiveService } from '../../../@core/services/responsive.service';
import { SearchOverlayService } from '../../../@core/services/search-overlay-service.service';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  public isResultsOpen = signal(false);
  public responsive = inject(ResponsiveService);
  public elementRef = inject(ElementRef);
  public searchOverlay = inject(SearchOverlayService);

  public opanResults(): void {
    this.searchOverlay.openSearch();
  }

  @HostListener('document:click', ['$event'])
  public handleOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-box-container')) {
      this.searchOverlay.closeSearch();
    }
  }
}
