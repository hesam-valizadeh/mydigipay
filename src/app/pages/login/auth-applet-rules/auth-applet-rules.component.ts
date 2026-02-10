import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-applet-rules',
  imports: [],
  templateUrl: './auth-applet-rules.component.html',
  styleUrl: './auth-applet-rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AuthAppletRulesComponent {
  public trackEffect(): void {}
}
