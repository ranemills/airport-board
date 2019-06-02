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

  constructor(
    private mockFlightDetailsService: MockFlightDetailsService
  ) { 
    this.flightDetailsService = mockFlightDetailsService;
  }

  ngOnInit() {
    this.getArrivals();
  }

  getArrivals(): void {
    this.flightDetailsService.getArrivals().then((arrivals) => this.arrivals = arrivals);
  }

}
