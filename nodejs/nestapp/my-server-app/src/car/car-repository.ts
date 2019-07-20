import { Car } from './car';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarRepository {

    create(car: Car) {
        console.log(`Creating Car`)
    }

    update(car: Car) {
        console.log(`Updating Car`)
    }

    delete(car: Car) {
        console.log(`Deleting Car`)
    }

    replace(car1: Car, car2: Car) { 
        console.log(`Replacing Car`)
    }
}
