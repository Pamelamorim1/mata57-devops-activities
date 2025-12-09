import { Test, TestingModule } from '@nestjs/testing';
import { LoansController } from './loans.controller';
import { LoansService } from '../../../use-case/loans/loans.service'; 

describe('LoansController', () => {
  let controller: LoansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoansController],
      // O Service precisa ser provido para satisfazer a dependência do Controller
      providers: [LoansService], 
    }).compile();

    controller = module.get<LoansController>(LoansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});