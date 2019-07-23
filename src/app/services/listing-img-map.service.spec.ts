import { TestBed } from '@angular/core/testing';

import { ListingImgMapService } from './listing-img-map.service';

describe('ListingImgMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListingImgMapService = TestBed.get(ListingImgMapService);
    expect(service).toBeTruthy();
  });
});
