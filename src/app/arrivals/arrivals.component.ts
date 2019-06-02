import { Component, OnInit } from '@angular/core';
import { Arrival } from '../models/arrival';
import { MockFlightDetailsService, FlightDetailsService } from '../services/flight-details.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {

  private readonly pollingInterval = 5000; // 5 seconds

  arrivals: Arrival[];
  flightDetailsService: FlightDetailsService;
  lastUpdate: Date;

  constructor(
    private mockFlightDetailsService: MockFlightDetailsService
  ) {
    this.flightDetailsService = mockFlightDetailsService;
  }

  ngOnInit() {
    timer(0, this.pollingInterval).subscribe(() => this.refreshArrivals())
  }

  refreshArrivals(): void {
    this.flightDetailsService.getArrivals().then((arrivals) => {
      this.arrivals = arrivals
      this.lastUpdate = new Date();
    });
  }

}
