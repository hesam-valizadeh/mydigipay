import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-third-party-insurance',
  imports: [],
  templateUrl: './third-party-insurance.component.html',
  styleUrl: './third-party-insurance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ThirdPartyInsuranceComponent {
  public trackEffect(): void {}

}
