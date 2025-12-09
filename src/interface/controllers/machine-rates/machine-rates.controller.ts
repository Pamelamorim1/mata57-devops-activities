import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from "@nestjs/common";
import { MachineRateDto } from "src/interface/dtos/machine-rate.dto";
import { MachineRatesService } from "src/use-case/machine-rates/machine-rates.service";

// FAZER TESTE UTILIZANDO POSTMAN OU SIMILAR
@Controller("machine-rates")
export class MachineRatesController {
  constructor(private readonly service: MachineRatesService) {}

  // criar
  @Post()
  create(@Body() createRateDto: MachineRateDto) {
    return this.service.create(createRateDto);
  }

  // retorna todos
  @Get()
  findAll(): MachineRateDto[] {
    return this.service.findAll();
  }

  // retorna 1 (busca pelo nome da maquininha)
  @Get(":machineName")
  findOne(@Param("machineName") machineName: string): MachineRateDto {
    return this.service.findOne(machineName);
  }

  // atualização
  @Put(":machineName")
  update(
    @Param("machineName") machineName: string,
    @Body() updateRateDto: Partial<MachineRateDto>,
  ) {
    return this.service.update(machineName, updateRateDto);
  }

  // deleta
  @Delete(":machineName")
  remove(@Param("machineName") machineName: string) {
    return this.service.remove(machineName);
  }
}