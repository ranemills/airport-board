import { Time } from '@angular/common';

export class DisplayableTime {

    public hours: string;
    public minutes: string;

    constructor(
        hoursNumber: number,
        minutesNumber: number
    ) {
        this.hours = hoursNumber.toString().padStart(2, '0');
        this.minutes = minutesNumber.toString().padStart(2, '0');
    }

    toString(): string {
        return `${this.hours}:${this.minutes}`
    }

}