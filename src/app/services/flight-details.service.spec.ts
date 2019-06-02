import { TestBed } from '@angular/core/testing';

import { FlightDetailsService } from './flight-details.service';

describe('FlightDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightDetailsService = TestBed.get(FlightDetailsService);
    expect(service).toBeTruthy();
  });
});
