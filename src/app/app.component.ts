import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../enviroment/environment';
import { FooterComponent } from './@layout/footer/footer.component';
import { SearchOverlayService } from './@core/services/search-overlay-service.service';
import { ResponsiveService } from './@core/services/responsive.service';
import { BottomNavigationComponent } from './@layout/bottom-navigation/bottom-navigation.component';
import { HeaderComponent } from './@layout/header/header.component';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BottomNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public searchOverlay = inject(SearchOverlayService);
  public showLayout = true;
  public responsive = inject(ResponsiveService);

  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly metaService = inject(Meta);
  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data: Data) => {
        this.showLayout = data['showLayout'] !== false;

        const pageTitle = data['title'] as string | undefined;
        if (pageTitle !== undefined && pageTitle !== '') {
          this.titleService.setTitle(pageTitle);
        }

        const description = data['description'] as string | undefined;
        if (description !== undefined && description !== '') {
          this.metaService.updateTag({
            name: 'description',
            content: description,
          });
        }

        this.updateCanonicalUrl();
      });
  }
  public get isMobile(): boolean {
    return this.responsive.isMobile();
  }
  public get isSearchOpen(): boolean {
    return this.searchOverlay.isSearchOpen();
  }
  private updateCanonicalUrl(): void {
    const currentPath = this.router.url.split('?')[0];
    const canonicalUrl = `${environment.baseURL}${currentPath}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }
}
