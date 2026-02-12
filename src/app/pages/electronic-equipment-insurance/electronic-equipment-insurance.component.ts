import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-electronic-equipment-insurance',
  imports: [],
  templateUrl: './electronic-equipment-insurance.component.html',
  styleUrl: './electronic-equipment-insurance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectronicEquipmentInsuranceComponent {
  public trackEffect(): void {}
}
