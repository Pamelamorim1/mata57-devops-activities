import { Test, TestingModule } from '@nestjs/testing';
import { MaquininhaController } from './maquininha.controller';

describe('MaquininhaController', () => {
  let controller: MaquininhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaquininhaController],
    }).compile();

    controller = module.get<MaquininhaController>(MaquininhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});