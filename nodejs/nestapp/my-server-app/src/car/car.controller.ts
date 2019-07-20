import { CarRepository } from './car-repository';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Car } from './car';

@Controller('car')
export class CarController {

    constructor(
        private readonly carRepo: CarRepository
    ) {

    }

    @Get()
    carHi() {
        let cr: Car = {
            name: 'android',
            price: 789,
            color: 'red'
        }
        return cr
    }

    @Get(':name')
    carRouteParams(
        @Param('name') name: string
    ) {
        let cr: Car = {
            name: name,
            price: 789,
            color: 'red'
        }
        return cr
    }

    @Post()
    carPost(
        @Body() car: Car
    ) {
        console.log(car) // use loggers and dont use console.log
        return {
            isResponse: true,
            data: car
        }
    }

    @Post('save')
    saveNewCar(@Body() car: Car) {
        this.carRepo.create(car)
        return {
            msg: 'success',
            sts: 'Car Saved Successfully'
        }
    }
}
