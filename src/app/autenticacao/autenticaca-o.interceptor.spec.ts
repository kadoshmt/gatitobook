import { TestBed } from '@angular/core/testing';

import { AutenticacaOInterceptor } from './autenticaca-o.interceptor';

describe('AutenticacaOInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutenticacaOInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutenticacaOInterceptor = TestBed.inject(AutenticacaOInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
