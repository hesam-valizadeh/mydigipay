import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './@layout/header/header.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { environment } from '../enviroment/environment';
import { FooterComponent } from './@layout/footer/footer.component';
import { SwUpdateService } from './@core/services/sw-custom.service';
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
  private router = inject(Router);
  private titleService = inject(Title);
  private activatedRoute = inject(ActivatedRoute);
  private metaService = inject(Meta);
  searchOverlay = inject(SearchOverlayService);
  private sw = inject(SwUpdateService);
  showLayout = true;
  responsive = inject(ResponsiveService);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        this.showLayout = data['showLayout'] !== false;
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
        if (data['description']) {
          this.metaService.updateTag({
            name: 'description',
            content: data['description'],
          });
        }

        const currentPath = this.router.url.split('?')[0];
        const canonicalUrl = `${environment.baseURL}${currentPath}`;
        this.metaService.removeTag("rel='canonical'");
        this.metaService.addTag({
          rel: 'canonical',
          href: canonicalUrl,
        });
      });
  }
}
