import { TestBed } from '@angular/core/testing';

import { JwtunAuthorizationInterceptorsService } from './jwtun-authorization-interceptors.service';

describe('JwtunAuthorizationInterceptorsService', () => {
  let service: JwtunAuthorizationInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtunAuthorizationInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
