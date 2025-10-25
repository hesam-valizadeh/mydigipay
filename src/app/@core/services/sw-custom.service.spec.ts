import { TestBed } from '@angular/core/testing';

import { SwCustomService } from './sw-custom.service';

describe('SwCustomService', () => {
  let service: SwCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
