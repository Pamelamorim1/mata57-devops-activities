import { Test, TestingModule } from '@nestjs/testing';
import { MachineRatesController } from './machine-rates.controller';
import { MachineRatesService } from '../../../use-case/machine-rates/machine-rates.service';

describe('MachineRatesController', () => {
  let controller: MachineRatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineRatesController],
      providers: [MachineRatesService], // O Service precisa ser provido aqui para o teste funcionar
    }).compile();

    controller = module.get<MachineRatesController>(MachineRatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});