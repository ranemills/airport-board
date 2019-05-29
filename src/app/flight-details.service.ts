import { Injectable } from '@angular/core';
import { DisplayableTime } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class MockFlightDetailsService implements FlightDetailsService {

  arrivals: Arrival[];
  departures: Departure[];

  private readonly destinations: string[] = ["Lisbon", "London", "Istanbul"];
  private readonly numGates: number = 15;

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
  }

  getDepartures(): Departure[] {
    return this.departures;
  }

  getArrivals(): Arrival[] {
    return this.arrivals;
  }

  refresh(): void {
    this.arrivals.pop();
    this.arrivals.push(this.getRandomArrival());
    this.departures.pop();
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
    return new DisplayableTime(10, 33);
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random()*max);
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