import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchOverlayService {
  public isSearchOpen = signal(false);

  public openSearch(): void {
    this.isSearchOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  public closeSearch(): void {
    this.isSearchOpen.set(false);
    document.body.style.overflow = '';
  }

  public toggleSearch(): void {
    this.isSearchOpen.update((v) => !v);
  }
}
