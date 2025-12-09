import { MachineRateDto } from "src/interface/dtos/machine-rate.dto";
export declare class MachineRatesService {
    private rates;
    private lastId;
    create(data: MachineRateDto): MachineRateDto;
    findAll(): MachineRateDto[];
    findOne(machineName: string): MachineRateDto;
    update(machineName: string, data: Partial<MachineRateDto>): MachineRateDto;
    remove(machineName: string): MachineRateDto;
}
