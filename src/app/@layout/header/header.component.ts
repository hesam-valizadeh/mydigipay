import { Component } from '@angular/core';
import {RouterLinksPath} from '../../@core/constans/router-links';
import {RouterLink} from '@angular/router';
import { SearchBoxComponent } from '../../@shared/components/search-box/search-box.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    SearchBoxComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  protected readonly RouterLinksPath = RouterLinksPath;
}
