"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const create_greeting_use_case_1 = require("../../use-case/create-greeting.use-case");
let AppController = class AppController {
    createGreetingUseCase;
    constructor(createGreetingUseCase) {
        this.createGreetingUseCase = createGreetingUseCase;
    }
    createHello(createGreetingDto) {
        return this.createGreetingUseCase.execute(createGreetingDto.name);
    }
    checkHealth(data) {
        if (!data) {
            return 'API saudável (sem dados para processar)!';
        }
        try {
            const parsedData = JSON.parse(data);
            if (Array.isArray(parsedData) && parsedData.length > 4) {
                parsedData.forEach((item, index) => {
                    console.log(`Item ${index}: ${item}`);
                });
                return 'API saudável!';
            }
            else {
                throw new Error('Array inválido ou com menos de 5 elementos');
            }
        }
        catch (error) {
            throw new Error('Dados inválidos: ' + error.message);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('hello'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Function)
], AppController.prototype, "createHello", null);
__decorate([
    (0, common_1.Get)('/health/check'),
    __param(0, (0, common_1.Query)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "checkHealth", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [create_greeting_use_case_1.CreateGreetingUseCase])
], AppController);
//# sourceMappingURL=app.controller.js.map