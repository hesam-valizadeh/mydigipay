import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './@layout/header/header.component';
import {Meta, Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs';
import {environment} from '../enviroment/environment';
import { FooterComponent } from './@layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta
  ) {}


  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
        if (data['description']) {
          this.metaService.updateTag({
            name: 'description',
            content: data['description']
          });
        }

        const currentPath = this.router.url.split('?')[0];
        const canonicalUrl = `${environment.baseURL}${currentPath}`;
        this.metaService.removeTag("rel='canonical'");
        this.metaService.addTag({
          rel: 'canonical',
          href: canonicalUrl
        });
      });
  }
}
