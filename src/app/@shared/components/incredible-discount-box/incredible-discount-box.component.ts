import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IIncredibleDiscountDataInterface } from '@core/models/interfaces/incredible-discount-box.interface';
import { ListModel } from '@core/models/list-model';
import { ProductSectionComponent } from 'src/app/components/product-section/product-section.component';
import { incredibleDiscountData } from './constants/incredible-discount-data.const';
import { IProductCarousel } from 'src/app/components/product-section/model/carousel-inerface';

interface ISectionViewModel {
  id: number;
  category: string;
  products: ListModel<IProductCarousel>;
  timerEndDate: Date | null;
  viewAllLink: string | null;
}

@Component({
  selector: 'app-incredible-discount-box',
  standalone: true,
  imports: [ProductSectionComponent],
  templateUrl: './incredible-discount-box.component.html',
  styleUrls: ['./incredible-discount-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncredibleDiscountBoxComponent {
  public readonly sections: ISectionViewModel[] = this.mapSections(incredibleDiscountData);

  private mapSections(data: IIncredibleDiscountDataInterface): ISectionViewModel[] {
    return Object.keys(data).map((key, index) => {
      const section = data[key as keyof IIncredibleDiscountDataInterface];

      return {
        id: index + 1,
        category: section.category ?? '',
        products: new ListModel<IProductCarousel>(section.sliderProducts ?? []),
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        timerEndDate: section.timerEndDate ? new Date(section.timerEndDate) : null,
        viewAllLink: section.link ?? null,
      };
    });
  }
}
