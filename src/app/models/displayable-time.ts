import { Time } from '@angular/common';

export class DisplayableTime
    implements Time {

    constructor(
        public hours: number,
        public minutes: number
    ) { }

    toString(): string {
        return `${this.hours}:${this.minutes}`
    }

}