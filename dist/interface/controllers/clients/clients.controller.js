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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const client_dto_1 = require("../../dtos/client.dto");
let clientes = [];
let ClientsController = class ClientsController {
    create(createClientDto) {
        const existente = clientes.find(x => x.email === createClientDto.email);
        if (existente) {
            throw new common_1.BadRequestException("Cliente já cadastrado com esse Email");
        }
        clientes.push(createClientDto);
        return createClientDto;
    }
    findAll() {
        return clientes;
    }
    findOne(email) {
        return clientes.find(x => x.email === email);
    }
    update(email, updateClientDto) {
        const index = clientes.findIndex(x => x.email === email);
        if (index === -1) {
            throw new common_1.NotFoundException("Cliente não encontrado");
        }
        clientes[index] = { ...clientes[index], ...updateClientDto };
        return clientes[index];
    }
    remove(email) {
        const index = clientes.findIndex(x => x.email === email);
        if (index === -1) {
            throw new common_1.NotFoundException("Cliente não encontrado");
        }
        const removido = clientes.splice(index, 1)[0];
        return removido;
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_dto_1.ClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "remove", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)("clients")
], ClientsController);
//# sourceMappingURL=clients.controller.js.map