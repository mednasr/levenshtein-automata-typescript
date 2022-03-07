import { TestBed } from '@angular/core/testing';

import { DnasService } from './dnas.service';

describe('DnasService', () => {
  let service: DnasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
