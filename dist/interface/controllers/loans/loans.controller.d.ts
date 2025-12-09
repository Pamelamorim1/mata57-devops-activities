import { LoanDto } from "src/interface/dtos/loan.dto";
import { LoansService } from "src/use-case/loans/loans.service";
export declare class LoansController {
    private readonly service;
    constructor(service: LoansService);
    create(createLoanDto: LoanDto): LoanDto;
    findAll(): LoanDto[];
    findOne(loanId: string): LoanDto;
    update(loanId: string, updateLoanDto: Partial<LoanDto>): LoanDto;
    remove(loanId: string): LoanDto;
}
