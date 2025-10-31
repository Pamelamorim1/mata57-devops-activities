import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { CreateGreetingUseCase } from '../../use-case/create-greeting.use-case';

// Mock do UseCase
const mockCreateGreetingUseCase = {
  execute: jest.fn((name) => ({ message: `Hello, ${name}!` })),
};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: CreateGreetingUseCase,
          useValue: mockCreateGreetingUseCase,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root (POST /hello)', () => {
    it('should return "Hello, World!"', () => {
      const dto = { name: 'World' };
      expect(appController.createHello(dto)).toEqual({
        message: 'Hello, World!',
      });
      expect(mockCreateGreetingUseCase.execute).toHaveBeenCalledWith('World');
    });
  });

  describe('healthCheck (GET /health/check)', () => {
    it('should return "API saudável!" for valid data', () => {
      const data = JSON.stringify([1, 2, 3, 4, 5]);
      expect(appController.checkHealth(data)).toBe('API saudável!');
    });

    it('should throw an error for invalid array length', () => {
      const data = JSON.stringify([1, 2, 3]);
      expect(() => appController.checkHealth(data)).toThrow(
        'Array inválido ou com menos de 5 elementos',
      );
    });

    it('should return healthy if no data is provided', () => {
      expect(appController.checkHealth(undefined)).toBe(
        'API saudável (sem dados para processar)!',
      );
    });
  });
});