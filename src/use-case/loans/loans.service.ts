import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { LoanDto } from "src/interface/dtos/loan.dto";

@Injectable()
export class LoansService {
  private loans: LoanDto[] = [];
  private lastId = 0;

  create(data: LoanDto): LoanDto {
    // Verifica se já existe um empréstimo com este loanId
    const existe = this.loans.find(l => l.loanId === data.loanId);
    if (existe) {
      throw new BadRequestException("Já existe um empréstimo registrado com este ID.");
    }

    const novo = {
      ...data,
      id: ++this.lastId, // ID interno (simulado em memória)
    };

    this.loans.push(novo);
    return novo;
  }

  findAll(): LoanDto[] {
    return this.loans;
  }

  findOne(loanId: string): LoanDto {
    const loan = this.loans.find(l => l.loanId === loanId);
    if (!loan) {
      throw new NotFoundException("Empréstimo não encontrado.");
    }
    return loan;
  }

  update(loanId: string, data: Partial<LoanDto>): LoanDto {
    const index = this.loans.findIndex(l => l.loanId === loanId);

    if (index === -1) {
      throw new NotFoundException("Empréstimo não encontrado.");
    }

    // Atualiza os dados (garante que o ID interno e o loanId original sejam mantidos)
    this.loans[index] = {
      ...this.loans[index],
      ...data,
    };

    return this.loans[index];
  }

  remove(loanId: string): LoanDto {
    const index = this.loans.findIndex(l => l.loanId === loanId);

    if (index === -1) {
      throw new NotFoundException("Empréstimo não encontrado.");
    }

    const removido = this.loans.splice(index, 1)[0];
    return removido;
  }
}