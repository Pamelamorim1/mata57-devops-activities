"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmService = void 0;
const common_1 = require("@nestjs/common");
let AdmService = class AdmService {
    adms = [];
    lastId = 0;
    create(data) {
        const existe = this.adms.find(a => a.email === data.email);
        if (existe) {
            throw new common_1.BadRequestException("Já existe um administrador com esse email");
        }
        const novo = {
            ...data,
            id: ++this.lastId,
        };
        this.adms.push(novo);
        return novo;
    }
    findAll() {
        return this.adms;
    }
    findOne(email) {
        const adm = this.adms.find(a => a.email === email);
        if (!adm) {
            throw new common_1.NotFoundException("Administrador não encontrado");
        }
        return adm;
    }
    update(email, data) {
        const index = this.adms.findIndex(a => a.email === email);
        if (index === -1) {
            throw new common_1.NotFoundException("Administrador não encontrado");
        }
        this.adms[index] = {
            ...this.adms[index],
            ...data,
        };
        return this.adms[index];
    }
    remove(email) {
        const index = this.adms.findIndex(a => a.email === email);
        if (index === -1) {
            throw new common_1.NotFoundException("Administrador não encontrado");
        }
        const removido = this.adms.splice(index, 1)[0];
        return removido;
    }
};
exports.AdmService = AdmService;
exports.AdmService = AdmService = __decorate([
    (0, common_1.Injectable)()
], AdmService);
//# sourceMappingURL=adm.service.js.map