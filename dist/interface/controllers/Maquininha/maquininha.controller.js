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
exports.MaquininhaController = void 0;
const common_1 = require("@nestjs/common");
const maquininha_service_1 = require("../../../use-case/maquininha/maquininha.service");
let MaquininhaController = class MaquininhaController {
    maquininhaService;
    constructor(maquininhaService) {
        this.maquininhaService = maquininhaService;
    }
    createBatch(maquininhas) {
        return this.maquininhaService.createMany(maquininhas);
    }
    findAll() {
        return this.maquininhaService.findAll();
    }
    findOne(serial) {
        return this.maquininhaService.findOne(serial);
    }
    update(serial, updateData) {
        return this.maquininhaService.update(serial, updateData);
    }
    remove(serial) {
        return this.maquininhaService.remove(serial);
    }
};
exports.MaquininhaController = MaquininhaController;
__decorate([
    (0, common_1.Post)('lote'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], MaquininhaController.prototype, "createBatch", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaquininhaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':serial'),
    __param(0, (0, common_1.Param)('serial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaquininhaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':serial'),
    __param(0, (0, common_1.Param)('serial')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MaquininhaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':serial'),
    __param(0, (0, common_1.Param)('serial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaquininhaController.prototype, "remove", null);
exports.MaquininhaController = MaquininhaController = __decorate([
    (0, common_1.Controller)('maquininhas'),
    __metadata("design:paramtypes", [maquininha_service_1.MaquininhaService])
], MaquininhaController);
//# sourceMappingURL=maquininha.controller.js.map