import { TestBed } from '@angular/core/testing';

import { ProviderAuthService } from './provider-auth.service';

describe('ProviderAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderAuthService = TestBed.get(ProviderAuthService);
    expect(service).toBeTruthy();
  });
});
