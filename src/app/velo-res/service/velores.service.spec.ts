import { TestBed } from '@angular/core/testing';

import { VeloresService } from './velores.service';

describe('VeloresService', () => {
  let service: VeloresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeloresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
