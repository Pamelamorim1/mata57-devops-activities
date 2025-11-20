import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { ClientDto } from "src/interface/dtos/client.dto";

@Injectable()
export class ClientsService {
  private clients: ClientDto[] = [];
  private lastId = 0;

  create(data: ClientDto): ClientDto {
    const existe = this.clients.find(c => c.email === data.email);
    if (existe) {
      throw new BadRequestException("Já existe um cliente com esse email");
    }

    const novo = {
      ...data,
      id: ++this.lastId,
    };

    this.clients.push(novo);
    return novo;
  }

  findAll(): ClientDto[] {
    return this.clients;
  }

  findOne(email: string): ClientDto {
    const cliente = this.clients.find(c => c.email === email);
    if (!cliente) {
      throw new NotFoundException("Cliente não encontrado");
    }
    return cliente;
  }

  update(email: string, data: Partial<ClientDto>): ClientDto {
    const index = this.clients.findIndex(c => c.email === email);

    if (index === -1) {
      throw new NotFoundException("Cliente não encontrado");
    }

    this.clients[index] = {
      ...this.clients[index],
      ...data,
    };

    return this.clients[index];
  }

  remove(email: string): ClientDto {
    const index = this.clients.findIndex(c => c.email === email);

    if (index === -1) {
      throw new NotFoundException("Cliente não encontrado");
    }

    const removido = this.clients.splice(index, 1)[0];
    return removido;
  }
}
