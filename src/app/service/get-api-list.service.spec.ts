import { TestBed } from '@angular/core/testing';

import { GetApiListService } from './get-api-list.service';

describe('GetApiListService', () => {
  let service: GetApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
