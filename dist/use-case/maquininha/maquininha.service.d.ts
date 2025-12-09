import { MaquininhaDto } from '../../interface/dtos/maquininha.dto';
export declare class MaquininhaService {
    private maquininhas;
    create(maquininha: MaquininhaDto): MaquininhaDto;
    createMany(listaMaquininhas: MaquininhaDto[]): MaquininhaDto[];
    findAll(): MaquininhaDto[];
    findOne(serial: string): MaquininhaDto;
    update(serial: string, updateData: Partial<MaquininhaDto>): MaquininhaDto;
    remove(serial: string): {
        message: string;
    };
}
