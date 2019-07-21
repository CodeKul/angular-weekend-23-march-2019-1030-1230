import { Test, TestingModule } from '@nestjs/testing';
import { PcControllerController } from './pc-controller.controller';

describe('PcController Controller', () => {
  let controller: PcControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcControllerController],
    }).compile();

    controller = module.get<PcControllerController>(PcControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
