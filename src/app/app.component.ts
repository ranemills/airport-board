import { Component } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrivals: Arrival[];
  departures: Departure[];

  constructor() {
    this.arrivals = [
      new Arrival("Turkey", new DisplayableTime(10, 55), 10),
      new Arrival("Lisbon", new DisplayableTime(10, 30), 14),
      new Arrival("London", new DisplayableTime(6, 30), 200)
    ];
    this.departures = [
      new Departure("Turkey", new DisplayableTime(10, 55), 10),
      new Departure("Lisbon", new DisplayableTime(10, 30), 14),
      new Departure("London", new DisplayableTime(6, 30), 200)
    ]
  }

}

class Arrival {

  constructor(
    public from: string,
    public arrivalTime: Time,
    public gate: number
  ) {}

}

class Departure {

  constructor(
    public to: string,
    public departureTime: Time,
    public gate: number
  ) {}

}

class DisplayableTime
  implements Time {

  constructor(
    public hours:number,
    public minutes:number
  ) { }

  toString(): string {
    return `${this.hours}:${this.minutes}`
  }

}