"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansService = void 0;
const common_1 = require("@nestjs/common");
let LoansService = class LoansService {
    loans = [];
    lastId = 0;
    create(data) {
        const existe = this.loans.find(l => l.loanId === data.loanId);
        if (existe) {
            throw new common_1.BadRequestException("Já existe um empréstimo registrado com este ID.");
        }
        const novo = {
            ...data,
            id: ++this.lastId,
        };
        this.loans.push(novo);
        return novo;
    }
    findAll() {
        return this.loans;
    }
    findOne(loanId) {
        const loan = this.loans.find(l => l.loanId === loanId);
        if (!loan) {
            throw new common_1.NotFoundException("Empréstimo não encontrado.");
        }
        return loan;
    }
    update(loanId, data) {
        const index = this.loans.findIndex(l => l.loanId === loanId);
        if (index === -1) {
            throw new common_1.NotFoundException("Empréstimo não encontrado.");
        }
        this.loans[index] = {
            ...this.loans[index],
            ...data,
        };
        return this.loans[index];
    }
    remove(loanId) {
        const index = this.loans.findIndex(l => l.loanId === loanId);
        if (index === -1) {
            throw new common_1.NotFoundException("Empréstimo não encontrado.");
        }
        const removido = this.loans.splice(index, 1)[0];
        return removido;
    }
};
exports.LoansService = LoansService;
exports.LoansService = LoansService = __decorate([
    (0, common_1.Injectable)()
], LoansService);
//# sourceMappingURL=loans.service.js.map