import { Component, OnInit } from '@angular/core';
import { Departure } from '../models/departure';
import { MockFlightDetailsService, FlightDetailsService } from '../flight-details.service';
import { DisplayableTime } from '../models/displayable-time';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  departures: Departure[];
  flightDetailsService: FlightDetailsService;
  lastUpdate: Date;

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

      this.lastUpdate = new Date();
    });
  }

}
