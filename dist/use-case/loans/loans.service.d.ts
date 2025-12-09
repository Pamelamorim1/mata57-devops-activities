import { LoanDto } from "src/interface/dtos/loan.dto";
export declare class LoansService {
    private loans;
    private lastId;
    create(data: LoanDto): LoanDto;
    findAll(): LoanDto[];
    findOne(loanId: string): LoanDto;
    update(loanId: string, data: Partial<LoanDto>): LoanDto;
    remove(loanId: string): LoanDto;
}
