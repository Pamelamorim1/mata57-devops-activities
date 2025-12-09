"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRatesService = void 0;
const common_1 = require("@nestjs/common");
let MachineRatesService = class MachineRatesService {
    rates = [];
    lastId = 0;
    create(data) {
        const existe = this.rates.find(r => r.machineName === data.machineName);
        if (existe) {
            throw new common_1.BadRequestException("Já existe uma configuração de taxas para esta maquininha");
        }
        const novo = {
            ...data,
            id: ++this.lastId,
        };
        this.rates.push(novo);
        return novo;
    }
    findAll() {
        return this.rates;
    }
    findOne(machineName) {
        const rate = this.rates.find(r => r.machineName === machineName);
        if (!rate) {
            throw new common_1.NotFoundException("Taxa da maquininha não encontrada");
        }
        return rate;
    }
    update(machineName, data) {
        const index = this.rates.findIndex(r => r.machineName === machineName);
        if (index === -1) {
            throw new common_1.NotFoundException("Taxa da maquininha não encontrada");
        }
        this.rates[index] = {
            ...this.rates[index],
            ...data,
        };
        return this.rates[index];
    }
    remove(machineName) {
        const index = this.rates.findIndex(r => r.machineName === machineName);
        if (index === -1) {
            throw new common_1.NotFoundException("Taxa da maquininha não encontrada");
        }
        const removido = this.rates.splice(index, 1)[0];
        return removido;
    }
};
exports.MachineRatesService = MachineRatesService;
exports.MachineRatesService = MachineRatesService = __decorate([
    (0, common_1.Injectable)()
], MachineRatesService);
//# sourceMappingURL=machine-rates.service.js.map