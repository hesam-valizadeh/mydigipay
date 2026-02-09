import { Component } from '@angular/core';
import { routerLinksPath } from '../../@core/constants/router-links';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  imports: [RouterLink],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.scss',
})
export class BottomNavigationComponent {
  protected readonly routerLinksPath = routerLinksPath;
}
