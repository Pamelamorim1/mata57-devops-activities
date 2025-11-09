import { AdmDto } from "src/interface/dtos/adm.dto";
export declare class AdmController {
    create(createAdmDto: AdmDto): AdmDto;
    findAll(): AdmDto[];
    findOne(email: string): AdmDto | undefined;
    update(email: string, updateAdmDto: AdmDto): AdmDto;
    remove(email: string): AdmDto;
}
