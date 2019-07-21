import { Pc } from './pc';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports : [
        TypeOrmModule.forFeature([
            Pc
        ])
    ]
})
export class PcModule {}
