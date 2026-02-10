import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hub',
  imports: [],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HubComponent {
  public trackEffect(): void {}

}
