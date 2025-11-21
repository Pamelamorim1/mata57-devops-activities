import { ClientDto } from "src/interface/dtos/client.dto";
import { ClientsService } from "src/use-case/clients/clients.service";
export declare class ClientsController {
    private readonly service;
    constructor(service: ClientsService);
    create(createClientDto: ClientDto): ClientDto;
    findAll(): ClientDto[];
    findOne(email: string): ClientDto;
    update(email: string, updateClientDto: Partial<ClientDto>): ClientDto;
    remove(email: string): ClientDto;
}
