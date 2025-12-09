import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from "@nestjs/common";
import { LoanDto } from "src/interface/dtos/loan.dto";
import { LoansService } from "src/use-case/loans/loans.service";

// FAZER TESTE UTILIZANDO POSTMAN OU SIMILAR
@Controller("loans")
export class LoansController {
  constructor(private readonly service: LoansService) {}

  // criar
  @Post()
  create(@Body() createLoanDto: LoanDto) {
    return this.service.create(createLoanDto);
  }

  // retorna todos
  @Get()
  findAll(): LoanDto[] {
    return this.service.findAll();
  }

  // retorna 1 (busca pelo loanId)
  @Get(":loanId")
  findOne(@Param("loanId") loanId: string): LoanDto {
    return this.service.findOne(loanId);
  }

  // atualização
  @Put(":loanId")
  update(
    @Param("loanId") loanId: string,
    @Body() updateLoanDto: Partial<LoanDto>,
  ) {
    return this.service.update(loanId, updateLoanDto);
  }

  // deleta
  @Delete(":loanId")
  remove(@Param("loanId") loanId: string) {
    return this.service.remove(loanId);
  }
}