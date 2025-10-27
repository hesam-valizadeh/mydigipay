import { Directive} from "@angular/core";
import {Labels} from "@core/constants/labels";

@Directive()
export class BaseClass {
  protected readonly labels = Labels;
}
