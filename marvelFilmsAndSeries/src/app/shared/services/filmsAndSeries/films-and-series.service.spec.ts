import { TestBed } from '@angular/core/testing';

import { FilmsAndSeriesService } from './films-and-series.service';

describe('FilmsAndSeriesService', () => {
  let service: FilmsAndSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsAndSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
