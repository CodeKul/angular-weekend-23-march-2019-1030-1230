import { Controller, Get, Post, Body } from '@nestjs/common';
import { Car } from './car';

@Controller('car')
export class CarController {
    @Get()
    carHi() {
        let cr: Car = {
            name: 'android',
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
}
