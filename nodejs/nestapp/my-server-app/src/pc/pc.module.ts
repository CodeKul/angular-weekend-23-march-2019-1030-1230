import { Pc } from './pc';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcService } from './pc/pc.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([
            Pc
        ])
    ],
    providers: [PcService]
})
export class PcModule {}
