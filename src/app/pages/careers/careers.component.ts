import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  imports: [],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CareersComponent {
  public trackEffect(): void {}

}
