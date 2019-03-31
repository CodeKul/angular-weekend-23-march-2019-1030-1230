export class Car {
    /*speed: number
    rpm: number
    brand: string

    constructor( sp : number, rpm : number, brand : string) {
        this.speed = sp
        this.rpm = rpm
        this.brand = brand
    }*/

    constructor(
        private speed?: number,
        private rpm?: number,
        private brand?: string 
    ) { } // optional parameters

    speedUp(speed: number = 10) { // default parameters
        this.speed = speed + (this.rpm += 10)
    }

    whatsBrand() {
        return this.brand
    }
}

//obejct creation
let cr = new Car() //  ORV - Object Reference Variable
cr.speedUp(89)