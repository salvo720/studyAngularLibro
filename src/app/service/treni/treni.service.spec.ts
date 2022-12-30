import { TestBed } from '@angular/core/testing';

import { TreniService } from './treni.service';

describe('TreniService', () => {
  let service: TreniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
