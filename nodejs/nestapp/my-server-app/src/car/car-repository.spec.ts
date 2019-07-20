import { Test, TestingModule } from '@nestjs/testing';
import { CarRepository } from './car-repository';

describe('CarRepository', () => {
  let provider: CarRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarRepository],
    }).compile();

    provider = module.get<CarRepository>(CarRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
