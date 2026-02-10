import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-organizational-bnpl',
  imports: [],
  templateUrl: './organizational-bnpl.component.html',
  styleUrl: './organizational-bnpl.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class OrganizationalBnplComponent {
  public trackEffect(): void {}

}
