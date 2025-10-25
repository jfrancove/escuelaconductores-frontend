import { TestBed } from '@angular/core/testing';

import { EscuelasServices } from './escuelas.services';

describe('EscuelasServices', () => {
  let service: EscuelasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuelasServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
