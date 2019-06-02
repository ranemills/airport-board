import { DisplayableTime } from './displayable-time';

export class Departure {

    constructor(
        public to: string,
        public departureTime: DisplayableTime,
        public gate: number
    ) { }

}