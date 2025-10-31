"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraModule = void 0;
const common_1 = require("@nestjs/common");
const greeting_repository_interface_1 = require("../domain/greeting/greeting.repository.interface");
const memory_greeting_repository_1 = require("./repositories/memory-greeting.repository");
let InfraModule = class InfraModule {
};
exports.InfraModule = InfraModule;
exports.InfraModule = InfraModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: greeting_repository_interface_1.GREETING_REPOSITORY,
                useClass: memory_greeting_repository_1.MemoryGreetingRepository,
            },
        ],
        exports: [
            greeting_repository_interface_1.GREETING_REPOSITORY,
        ],
    })
], InfraModule);
//# sourceMappingURL=infra.module.js.map