import { Component, OnInit } from '@angular/core';
import { Departure } from '../models/departure';
import { MockFlightDetailsService, FlightDetailsService } from '../flight-details.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  departures: Departure[];
  flightDetailsService: FlightDetailsService;

  constructor(
    private mockFlightDetailsService: MockFlightDetailsService
  ) {
    this.flightDetailsService = mockFlightDetailsService;
  }

  ngOnInit() {
    this.refreshDepartures();
  }

  refreshDepartures(): void {
    this.flightDetailsService.getDepartures().then((departures) => {
      this.departures = departures
    });
  }

}
