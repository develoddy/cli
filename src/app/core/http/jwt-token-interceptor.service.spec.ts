import { TestBed } from '@angular/core/testing';

import { JwtTokenInterceptorService } from './jwt-token-interceptor.service';

describe('JwtTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtTokenInterceptorService = TestBed.get(JwtTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
