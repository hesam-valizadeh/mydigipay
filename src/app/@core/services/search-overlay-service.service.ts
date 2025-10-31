import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchOverlayService{
  isSearchOpen = signal(false);

  openSearch() {
    this.isSearchOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeSearch() {
    this.isSearchOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleSearch() {
    this.isSearchOpen.update((v) => !v);
  }
}
