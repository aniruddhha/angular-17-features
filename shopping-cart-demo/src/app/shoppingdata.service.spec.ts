import { TestBed } from '@angular/core/testing';

import { ShoppingdataService } from './shoppingdata.service';

describe('ShoppingdataService', () => {
  let service: ShoppingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
