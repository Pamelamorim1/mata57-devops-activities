import { MachineRateDto } from "src/interface/dtos/machine-rate.dto";
import { MachineRatesService } from "src/use-case/machine-rates/machine-rates.service";
export declare class MachineRatesController {
    private readonly service;
    constructor(service: MachineRatesService);
    create(createRateDto: MachineRateDto): MachineRateDto;
    findAll(): MachineRateDto[];
    findOne(machineName: string): MachineRateDto;
    update(machineName: string, updateRateDto: Partial<MachineRateDto>): MachineRateDto;
    remove(machineName: string): MachineRateDto;
}
