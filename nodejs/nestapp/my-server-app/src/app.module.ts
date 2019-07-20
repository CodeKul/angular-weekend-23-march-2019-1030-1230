import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { CarRepository } from './car/car-repository';

@Module({
  imports: [],
  controllers: [AppController, CarController],
  providers: [AppService, CarRepository],
})
export class AppModule {}
