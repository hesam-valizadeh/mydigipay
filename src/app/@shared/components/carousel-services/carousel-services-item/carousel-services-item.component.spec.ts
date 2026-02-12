import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselServicesItemComponent } from './carousel-services-item.component';

describe('CarouselServicesItemComponent', () => {
  let component: CarouselServicesItemComponent;
  let fixture: ComponentFixture<CarouselServicesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselServicesItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselServicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
