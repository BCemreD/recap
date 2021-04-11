import { TestBed } from '@angular/core/testing';

import { SliceBrandService } from './slice-brand.service';

describe('SliceBrandService', () => {
  let service: SliceBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliceBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
