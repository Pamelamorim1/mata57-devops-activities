import { AdmDto } from "src/interface/dtos/adm.dto";
import { AdmService } from "src/use-case/adm/adm.service";
export declare class AdmController {
    private readonly service;
    constructor(service: AdmService);
    create(createAdmDto: AdmDto): AdmDto;
    findAll(): AdmDto[];
    findOne(email: string): AdmDto;
    update(email: string, updateAdmDto: Partial<AdmDto>): AdmDto;
    remove(email: string): AdmDto;
}
