"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const create_greeting_use_case_1 = require("./create-greeting.use-case");
const infra_module_1 = require("../infra/infra.module");
let UseCaseModule = class UseCaseModule {
};
exports.UseCaseModule = UseCaseModule;
exports.UseCaseModule = UseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [infra_module_1.InfraModule],
        providers: [create_greeting_use_case_1.CreateGreetingUseCase],
        exports: [create_greeting_use_case_1.CreateGreetingUseCase],
    })
], UseCaseModule);
//# sourceMappingURL=use-case.module.js.map