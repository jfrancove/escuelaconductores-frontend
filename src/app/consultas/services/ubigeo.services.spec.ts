import { TestBed } from '@angular/core/testing';

import { UbigeoServices } from './ubigeo.services';

describe('DepartamentosServices', () => {
  let service: UbigeoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbigeoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
