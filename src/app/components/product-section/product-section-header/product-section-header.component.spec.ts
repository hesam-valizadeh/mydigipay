import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionHeaderComponent } from './product-section-header.component';

describe('ProductSectionHeaderComponent', () => {
  let component: ProductSectionHeaderComponent;
  let fixture: ComponentFixture<ProductSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSectionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
