import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';

@Module({
  imports: [],
  controllers: [AppController, CarController],
  providers: [AppService],
})
export class AppModule {}
