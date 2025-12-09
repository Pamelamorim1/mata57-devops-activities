export class LoanDto {
  id?: number;
  loanId: string;         // Identificador único do empréstimo (Ex: número do contrato)
  clientName: string;     // Nome do Cliente
  principalAmount: number;// Valor principal do empréstimo
  interestRate: number;   // Taxa de juros aplicada (a.m. ou a.a.)
  profitMargin: number;   // Margem de lucro da empresa (%)
  taxRate: number;        // Taxa de Imposto (IOF, etc.) (%)
  installments: number;   // Número de parcelas
}