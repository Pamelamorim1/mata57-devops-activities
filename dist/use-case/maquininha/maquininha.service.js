"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaquininhaService = void 0;
const common_1 = require("@nestjs/common");
let MaquininhaService = class MaquininhaService {
    maquininhas = [];
    create(maquininha) {
        const existe = this.maquininhas.find(m => m.serial_number === maquininha.serial_number);
        if (existe) {
            throw new common_1.BadRequestException(`Maquininha ${maquininha.serial_number} já existe!`);
        }
        this.maquininhas.push(maquininha);
        return maquininha;
    }
    createMany(listaMaquininhas) {
        const resultados = [];
        for (const maquina of listaMaquininhas) {
            this.create(maquina);
            resultados.push(maquina);
        }
        return resultados;
    }
    findAll() {
        return this.maquininhas;
    }
    findOne(serial) {
        const maquina = this.maquininhas.find(m => m.serial_number === serial);
        if (!maquina) {
            throw new common_1.NotFoundException("Maquininha não encontrada");
        }
        return maquina;
    }
    update(serial, updateData) {
        const index = this.maquininhas.findIndex(m => m.serial_number === serial);
        if (index === -1) {
            throw new common_1.NotFoundException("Maquininha não encontrada para atualizar");
        }
        this.maquininhas[index] = { ...this.maquininhas[index], ...updateData };
        return this.maquininhas[index];
    }
    remove(serial) {
        const index = this.maquininhas.findIndex(m => m.serial_number === serial);
        if (index === -1) {
            throw new common_1.NotFoundException("Maquininha não encontrada para deletar");
        }
        const removido = this.maquininhas.splice(index, 1);
        return { message: `Maquininha ${serial} removida com sucesso` };
    }
};
exports.MaquininhaService = MaquininhaService;
exports.MaquininhaService = MaquininhaService = __decorate([
    (0, common_1.Injectable)()
], MaquininhaService);
//# sourceMappingURL=maquininha.service.js.map