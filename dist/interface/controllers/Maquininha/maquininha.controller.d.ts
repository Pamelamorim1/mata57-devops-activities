import { MaquininhaService } from '../../../use-case/maquininha/maquininha.service';
import { MaquininhaDto } from '../../dtos/maquininha.dto';
export declare class MaquininhaController {
    private readonly maquininhaService;
    constructor(maquininhaService: MaquininhaService);
    createBatch(maquininhas: MaquininhaDto[]): MaquininhaDto[];
    findAll(): MaquininhaDto[];
    findOne(serial: string): MaquininhaDto;
    update(serial: string, updateData: Partial<MaquininhaDto>): MaquininhaDto;
    remove(serial: string): {
        message: string;
    };
}
