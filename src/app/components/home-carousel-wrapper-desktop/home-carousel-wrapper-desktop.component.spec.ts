import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarouselWrapperDesktopComponent } from './home-carousel-wrapper-desktop.component';

describe('HomeCarouselWrapperDesktopComponent', () => {
  let component: HomeCarouselWrapperDesktopComponent;
  let fixture: ComponentFixture<HomeCarouselWrapperDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCarouselWrapperDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCarouselWrapperDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
