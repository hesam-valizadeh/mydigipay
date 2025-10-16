import { Component } from '@angular/core';
import {RouterLinksPath} from '../../@core/constans/router-links';
import {RouterLink} from '@angular/router';
import { SearchBoxComponent } from '../../@shared/components/search-box/search-box.component';
import { HeaderViewDataInterface } from '../../view-models/header-view-data.interface';

@Component({
  selector: 'app-header',
  imports: [
    SearchBoxComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  protected readonly RouterLinksPath = RouterLinksPath;

  data: HeaderViewDataInterface = {
    
  }
}
