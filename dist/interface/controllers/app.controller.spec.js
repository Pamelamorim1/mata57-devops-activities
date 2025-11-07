"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_controller_1 = require("./app.controller");
const create_greeting_use_case_1 = require("../../use-case/create-greeting.use-case");
const mockCreateGreetingUseCase = {
    execute: jest.fn((name) => ({ message: `Hello, ${name}!` })),
};
describe('AppController', () => {
    let appController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [
                {
                    provide: create_greeting_use_case_1.CreateGreetingUseCase,
                    useValue: mockCreateGreetingUseCase,
                },
            ],
        }).compile();
        appController = app.get(app_controller_1.AppController);
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
            expect(() => appController.checkHealth(data)).toThrow('Array inválido ou com menos de 5 elementos');
        });
        it('should return healthy if no data is provided', () => {
            expect(appController.checkHealth(undefined)).toBe('API saudável (sem dados para processar)!');
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map