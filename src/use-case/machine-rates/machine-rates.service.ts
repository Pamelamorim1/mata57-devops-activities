import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { MachineRateDto } from "src/interface/dtos/machine-rate.dto";

@Injectable()
export class MachineRatesService {
  private rates: MachineRateDto[] = [];
  private lastId = 0;

  create(data: MachineRateDto): MachineRateDto {
    // Verifica se já existe uma taxa cadastrada para esta maquininha
    const existe = this.rates.find(r => r.machineName === data.machineName);
    if (existe) {
      throw new BadRequestException("Já existe uma configuração de taxas para esta maquininha");
    }

    const novo = {
      ...data,
      id: ++this.lastId,
    };

    this.rates.push(novo);
    return novo;
  }

  findAll(): MachineRateDto[] {
    return this.rates;
  }

  findOne(machineName: string): MachineRateDto {
    const rate = this.rates.find(r => r.machineName === machineName);
    if (!rate) {
      throw new NotFoundException("Taxa da maquininha não encontrada");
    }
    return rate;
  }

  update(machineName: string, data: Partial<MachineRateDto>): MachineRateDto {
    const index = this.rates.findIndex(r => r.machineName === machineName);

    if (index === -1) {
      throw new NotFoundException("Taxa da maquininha não encontrada");
    }

    // Atualiza os dados mantendo o ID e o Nome originais caso não sejam passados
    this.rates[index] = {
      ...this.rates[index],
      ...data,
    };

    return this.rates[index];
  }

  remove(machineName: string): MachineRateDto {
    const index = this.rates.findIndex(r => r.machineName === machineName);

    if (index === -1) {
      throw new NotFoundException("Taxa da maquininha não encontrada");
    }

    const removido = this.rates.splice(index, 1)[0];
    return removido;
  }
}