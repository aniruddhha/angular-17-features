import { TestBed } from '@angular/core/testing';

import { CssLibService } from './css-lib.service';

describe('CssLibService', () => {
  let service: CssLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
