export class MachineRateDto {
  id?: number;
  machineName: string; // Nome da maquininha (identificador único de negócio)
  taxRate: number;     // % da Taxa
  payoutRate: number;  // Valor ou % do Repasse
}