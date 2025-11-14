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
exports.AdmController = void 0;
const common_1 = require("@nestjs/common");
const adm_dto_1 = require("../../dtos/adm.dto");
let administradores = [];
let AdmController = class AdmController {
    create(createAdmDto) {
        const existente = administradores.find(x => x.email === createAdmDto.email);
        if (existente) {
            throw new common_1.BadRequestException("Adm já cadastrado com esse Email");
        }
        administradores.push(createAdmDto);
        return createAdmDto;
    }
    findAll() {
        return administradores;
    }
    findOne(email) {
        return administradores.find(x => x.email === email);
    }
    update(email, updateAdmDto) {
        const index = administradores.findIndex(x => x.email === email);
        console.log(index);
        console.log(email);
        console.log(updateAdmDto);
        if (index === -1) {
            throw new common_1.NotFoundException("Adm não encontrado");
        }
        administradores[index] = { ...administradores[index], ...updateAdmDto };
        return administradores[index];
    }
    remove(email) {
        const index = administradores.findIndex(x => x.email === email);
        if (index === -1) {
            throw new common_1.NotFoundException("Adm não encontrado");
        }
        const removido = administradores.splice(index, 1)[0];
        return removido;
    }
};
exports.AdmController = AdmController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adm_dto_1.AdmDto]),
    __metadata("design:returntype", void 0)
], AdmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AdmController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdmController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, adm_dto_1.AdmDto]),
    __metadata("design:returntype", void 0)
], AdmController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdmController.prototype, "remove", null);
exports.AdmController = AdmController = __decorate([
    (0, common_1.Controller)("adm")
], AdmController);
//# sourceMappingURL=adm.controller.js.map