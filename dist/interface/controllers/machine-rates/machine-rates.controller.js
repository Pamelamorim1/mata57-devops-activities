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
exports.MachineRatesController = void 0;
const common_1 = require("@nestjs/common");
const machine_rate_dto_1 = require("../../dtos/machine-rate.dto");
const machine_rates_service_1 = require("../../../use-case/machine-rates/machine-rates.service");
let MachineRatesController = class MachineRatesController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(createRateDto) {
        return this.service.create(createRateDto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(machineName) {
        return this.service.findOne(machineName);
    }
    update(machineName, updateRateDto) {
        return this.service.update(machineName, updateRateDto);
    }
    remove(machineName) {
        return this.service.remove(machineName);
    }
};
exports.MachineRatesController = MachineRatesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [machine_rate_dto_1.MachineRateDto]),
    __metadata("design:returntype", void 0)
], MachineRatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MachineRatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":machineName"),
    __param(0, (0, common_1.Param)("machineName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", machine_rate_dto_1.MachineRateDto)
], MachineRatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":machineName"),
    __param(0, (0, common_1.Param)("machineName")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MachineRatesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":machineName"),
    __param(0, (0, common_1.Param)("machineName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MachineRatesController.prototype, "remove", null);
exports.MachineRatesController = MachineRatesController = __decorate([
    (0, common_1.Controller)("machine-rates"),
    __metadata("design:paramtypes", [machine_rates_service_1.MachineRatesService])
], MachineRatesController);
//# sourceMappingURL=machine-rates.controller.js.map