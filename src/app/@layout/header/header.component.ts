import { Component, inject } from '@angular/core';
import {RouterLinksPath} from '../../@core/constans/router-links';
import {RouterLink} from '@angular/router';
import { SearchBoxComponent } from '../../@shared/components/search-box/search-box.component';
import { HeaderViewDataInterface } from '../../view-models/header-view-data.interface';
import { ResponsiveService } from '../../@core/services/responsive.service';

@Component({
  selector: 'app-header',
  imports: [
    SearchBoxComponent
  ],
  templateUrl: './header.component.html',
  styleUrl:'./header.component.scss'
})
export class HeaderComponent {

  protected readonly RouterLinksPath = RouterLinksPath;
  responsive = inject(ResponsiveService);
  data: HeaderViewDataInterface = {
    
  }
}
