import { TestBed } from '@angular/core/testing';

import { DummyDataServiceService } from './dummy-data-service.service';

describe('DummyDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyDataServiceService = TestBed.get(DummyDataServiceService);
    expect(service).toBeTruthy();
  });
});
