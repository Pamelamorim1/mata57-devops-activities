import { AdmDto } from "src/interface/dtos/adm.dto";
export declare class AdmService {
    private adms;
    private lastId;
    create(data: AdmDto): AdmDto;
    findAll(): AdmDto[];
    findOne(email: string): AdmDto;
    update(email: string, data: Partial<AdmDto>): AdmDto;
    remove(email: string): AdmDto;
}
