import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { CarRepository } from './car/car-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcModule } from './pc/pc.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PcModule
  ],
  controllers: [AppController, CarController],
  providers: [AppService, CarRepository],
})
export class AppModule {}
