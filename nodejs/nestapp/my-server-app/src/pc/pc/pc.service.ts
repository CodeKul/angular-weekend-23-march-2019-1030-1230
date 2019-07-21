import { Pc } from './../pc';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PcService {
    constructor(
        @InjectRepository(Pc)
        private readonly pcRepo: Repository<Pc>
    ) {

    }

    savePc(pc: Pc): Promise<Pc> {
        return this.pcRepo.save(pc)
    }
}
