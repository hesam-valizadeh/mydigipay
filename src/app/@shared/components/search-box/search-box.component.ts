import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { ResponsiveService } from '../../../@core/services/responsive.service';
import { SearchOverlayService } from '../../../@core/services/search-overlay-service.service';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  isResultsOpen = signal(false);
  responsive = inject(ResponsiveService);
  elementRef = inject(ElementRef);
  searchOverlay = inject(SearchOverlayService);

  opanResults() {
    this.searchOverlay.openSearch();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-box-container')) {
      this.searchOverlay.closeSearch();
    }
  }
}
