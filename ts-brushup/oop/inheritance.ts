import { Car } from './classes';
export class Bmw extends Car implements GpsTracker {

    control() {

    }

    trackMe() {

    }
}

let bm: Bmw = new Bmw()
bm.whatsBrand()
bm.control()

export interface GpsTracker {
    trackMe(): void
}

let obj = {
    trackMe: () => console.log(`called`)
}

let gp: GpsTracker = obj