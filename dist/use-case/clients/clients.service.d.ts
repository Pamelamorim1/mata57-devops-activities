import { ClientDto } from "src/interface/dtos/client.dto";
export declare class ClientsService {
    private clients;
    private lastId;
    create(data: ClientDto): ClientDto;
    findAll(): ClientDto[];
    findOne(email: string): ClientDto;
    update(email: string, data: Partial<ClientDto>): ClientDto;
    remove(email: string): ClientDto;
}
