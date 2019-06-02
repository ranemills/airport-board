import { DisplayableTime } from './displayable-time';

export class Arrival {

    constructor(
        public from: string,
        public arrivalTime: DisplayableTime,
        public gate: number
    ) { }

}