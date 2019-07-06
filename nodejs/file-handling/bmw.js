import { Car } from './car'
export class Bmw extends Car {

    speedUp() {
        console.log(`speeding up`)
    }
}

let bmw = new Bmw()
bmw.speedUp()

