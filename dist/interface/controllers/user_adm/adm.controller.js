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
const adm_service_1 = require("../../../use-case/adm/adm.service");
let AdmController = class AdmController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(createAdmDto) {
        return this.service.create(createAdmDto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(email) {
        return this.service.findOne(email);
    }
    update(email, updateAdmDto) {
        return this.service.update(email, updateAdmDto);
    }
    remove(email) {
        return this.service.remove(email);
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
    __metadata("design:returntype", void 0)
], AdmController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
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
    (0, common_1.Controller)("adm"),
    __metadata("design:paramtypes", [adm_service_1.AdmService])
], AdmController);
//# sourceMappingURL=adm.controller.js.map