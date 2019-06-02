import { Component, OnInit } from '@angular/core';
import { Arrival } from '../models/arrival';
import { MockFlightDetailsService, FlightDetailsService } from '../flight-details.service';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {

  arrivals: Arrival[];
  flightDetailsService: FlightDetailsService;
  lastUpdate: Date;

  constructor(
    private mockFlightDetailsService: MockFlightDetailsService
  ) { 
    this.flightDetailsService = mockFlightDetailsService;
  }

  ngOnInit() {
    this.refreshArrivals();
  }

  refreshArrivals(): void {
    this.flightDetailsService.getArrivals().then((arrivals) => {
      this.arrivals = arrivals
      this.lastUpdate = new Date();
    });
  }

}
