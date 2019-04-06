import { Car } from './classes';
export class Bmw extends Car implements GpsTracker {

    constructor(
        speed: number,
        rpm: number,
        brand: string,
        private light: boolean
    ) {
        super(speed, rpm, brand)
    }

    control() {

    }

    trackMe() {

    }
}

let bm: Bmw = new Bmw(89, 56, '', false)
bm.whatsBrand()
bm.control()

export interface GpsTracker {
    trackMe(): void
}

let obj = {
    trackMe: () => console.log(`called`)
}

let gp: GpsTracker = obj