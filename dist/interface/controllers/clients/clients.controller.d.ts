import { ClientDto } from "src/interface/dtos/client.dto";
export declare class ClientsController {
    create(createClientDto: ClientDto): ClientDto;
    findAll(): ClientDto[];
    findOne(email: string): ClientDto | undefined;
    update(email: string, updateClientDto: Partial<ClientDto>): ClientDto;
    remove(email: string): ClientDto;
}
