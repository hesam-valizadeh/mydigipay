import { TestBed } from '@angular/core/testing';

import { SearchOverlayServiceService } from './search-overlay-service.service';

describe('SearchOverlayServiceService', () => {
  let service: SearchOverlayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchOverlayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
