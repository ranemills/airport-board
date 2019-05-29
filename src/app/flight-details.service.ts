import { Injectable } from '@angular/core';
import { DisplayableTime } from './app.component';

import {take} from 'rxjs/operators';  
import {timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockFlightDetailsService implements FlightDetailsService {

  arrivals: Arrival[];
  departures: Departure[];

  private readonly destinations: string[] = ["Lisbon", "London", "Istanbul"];
  private readonly numGates: number = 15;
  private readonly pollingInterval = 5000; // 5 seconds

  constructor() {
    this.arrivals = [
      this.getRandomArrival(),
      this.getRandomArrival(),
      this.getRandomArrival(),
      this.getRandomArrival(),
      this.getRandomArrival()
    ];
    this.departures = [
      this.getRandomDeparture(),
      this.getRandomDeparture(),
      this.getRandomDeparture(),
      this.getRandomDeparture(),
      this.getRandomDeparture()
    ];

    // This is the thing that sets off the polling - maybe this should be in the component
    timer(1000, this.pollingInterval).subscribe(() => this.refresh())
  }

  getDepartures(): Departure[] {
    return this.departures;
  }

  getArrivals(): Arrival[] {
    return this.arrivals;
  }

  refresh(): void {
    this.arrivals.shift();
    this.arrivals.push(this.getRandomArrival());
    this.departures.shift();
    this.departures.push(this.getRandomDeparture());
  }

  private getRandomArrival(): Arrival {
    return new Arrival(
      this.getRandomLocation(), 
      this.getRandomTime(), 
      this.getRandomInt(this.numGates)+1
    );
  }

  private getRandomDeparture(): Departure {
    return new Departure(
      this.getRandomLocation(),
      this.getRandomTime(),
      this.getRandomInt(this.numGates)+1
    )
  }

  private getRandomLocation(): string {
    const index:number = this.getRandomInt(this.destinations.length-1);
    return this.destinations[index];
  }

  private getRandomTime(): DisplayableTime {
    return new DisplayableTime(this.getRandomInt(24), this.getRandomInt(60));
  }

  private getRandomInt(max: number): number {
    return Math.round(Math.random()*max);
  }


}

export interface FlightDetailsService {

  getDepartures(): Departure[];
  getArrivals(): Arrival[];
  refresh(): void;

}


export class Arrival {

  constructor(
    public from: string,
    public arrivalTime: DisplayableTime,
    public gate: number
  ) {}

}

export class Departure {

  constructor(
    public to: string,
    public departureTime: DisplayableTime,
    public gate: number
  ) {}

}