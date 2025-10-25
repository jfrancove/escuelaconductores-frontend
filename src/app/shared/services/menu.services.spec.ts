import { TestBed } from '@angular/core/testing';

import { MenuServices } from './menu.services';

describe('MenuServices', () => {
  let service: MenuServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
