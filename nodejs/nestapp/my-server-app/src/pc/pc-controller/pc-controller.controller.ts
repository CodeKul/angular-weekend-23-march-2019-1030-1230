import { PcService } from './../pc/pc.service';
import { Controller, Post, Body } from '@nestjs/common';
import { Pc } from '../pc';

@Controller('pc-controller')
export class PcControllerController {

    constructor(
        private readonly pcService: PcService
    ) {

    }

    @Post()
    save(@Body() pc: Pc): any {
        this.pcService.savePc(pc).then(
            pc => {
                return {
                    msg: 'pc saved successfully',
                    sts: 'success'
                }
            },
            rejRsn => {
                return {
                    msg: rejRsn,
                    sts: 'fail'
                }
            }
        )
    }
}
