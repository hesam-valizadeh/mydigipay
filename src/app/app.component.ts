import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './@layout/header/header.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { environment } from '../enviroment/environment';
import { FooterComponent } from './@layout/footer/footer.component';
import { SearchOverlayService } from './@core/services/search-overlay-service.service';
import { ResponsiveService } from './@core/services/responsive.service';
import { BottomNavigationComponent } from './@layout/bottom-navigation/bottom-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,BottomNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly metaService = inject(Meta);
  searchOverlay = inject(SearchOverlayService);
  showLayout = true;
  responsive = inject(ResponsiveService);
  ngOnInit(): void {
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
      mergeMap((route) => route.data)
    )
    // تعیین تایپ صریح برای پارامتر ورودی subscribe
    .subscribe((data: Data) => {
      // حالا با استفاده از تایپ Data، دسترسی به این کلیدها مجاز است
      this.showLayout = data['showLayout'] !== false;
      
      const pageTitle = data['title'] as string | undefined;
      if (pageTitle) {
        this.titleService.setTitle(pageTitle);
      }

      const description = data['description'] as string | undefined;
      if (description) {
        this.metaService.updateTag({
          name: 'description',
          content: description,
        });
      }
      
      this.updateCanonicalUrl();
    });
  }

  private updateCanonicalUrl(): void {
    const currentPath = this.router.url.split('?')[0];
    const canonicalUrl = `${environment.baseURL}${currentPath}`;
    
    // رفع خطا: متد addTag فقط MetaDefinition را می‌پذیرد (rel استاندارد نیست)
    // برای Canonical Link از روش استاندارد DOM یا MetaService اختصاصی استفاده می‌شود
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }

}
