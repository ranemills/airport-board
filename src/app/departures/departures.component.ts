import { Component, OnInit } from '@angular/core';
import { Departure } from '../models/departure';
import { MockFlightDetailsService, FlightDetailsService } from '../services/flight-details.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  private readonly pollingInterval = 5000; // 5 seconds

  departures: Departure[];
  flightDetailsService: FlightDetailsService;
  lastUpdate: Date;

  constructor(
    private mockFlightDetailsService: MockFlightDetailsService
  ) {
    this.flightDetailsService = mockFlightDetailsService;
  }

  ngOnInit() {
    timer(0, this.pollingInterval).subscribe(() => this.refreshDepartures())
  }

  refreshDepartures(): void {
    this.flightDetailsService.getDepartures().then((departures) => {
      this.departures = departures

      this.lastUpdate = new Date();
    });
  }

}
