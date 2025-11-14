import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { ClientDto } from "src/interface/dtos/client.dto";

//FAZER TESTE UTILIZANDO POSTMAN OU SIMILAR
let clientes: ClientDto[] = []; //alterar para tabela quando tiver uma base de dados

@Controller("clients")
export class ClientsController{

  //criar
  @Post()
  create(@Body() createClientDto: ClientDto) {
  const existente = clientes.find(x => x.email === createClientDto.email);
  if (existente) {
    throw new BadRequestException("Cliente já cadastrado com esse Email");
  }

  clientes.push(createClientDto);
  return createClientDto;
}

  //retorno todos
  @Get()
  findAll(): ClientDto[] {
    return clientes;
  }
  //retorna 1
  @Get(":email")
  findOne(@Param("email") email: string): ClientDto | undefined {
  return clientes.find(x => x.email === email);
}
//atualizaçao
@Put(":email")
update(@Param("email") email: string, @Body() updateClientDto: Partial<ClientDto>) {
  const index = clientes.findIndex(x => x.email === email); // ou email se você tiver email real

  if (index === -1) {
    throw new NotFoundException("Cliente não encontrado");
  }

  clientes[index] = { ...clientes[index], ...updateClientDto };
  return clientes[index];
}
//deleta
@Delete(":email")
remove(@Param("email") email: string) {
  const index = clientes.findIndex(x => x.email === email);

  if (index === -1) {
    throw new NotFoundException("Cliente não encontrado");
  }

  const removido = clientes.splice(index, 1)[0];
  return removido;
}
}
