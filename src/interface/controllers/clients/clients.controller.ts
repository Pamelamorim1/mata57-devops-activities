import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from "@nestjs/common";
import { ClientDto } from "src/interface/dtos/client.dto";
import { ClientsService } from "src/use-case/clients/clients.service";

//FAZER TESTE UTILIZANDO POSTMAN OU SIMILAR
@Controller("clients")
export class ClientsController {
  constructor(private readonly service: ClientsService) {}

  //criar
  @Post()
  create(@Body() createClientDto: ClientDto) {
    return this.service.create(createClientDto);
  }

  //retorna todos
  @Get()
  findAll(): ClientDto[] {
    return this.service.findAll();
  }

  //retorna 1
  @Get(":email")
  findOne(@Param("email") email: string): ClientDto {
    return this.service.findOne(email);
  }

  //atualização
  @Put(":email")
  update(
    @Param("email") email: string,
    @Body() updateClientDto: Partial<ClientDto>,
  ) {
    return this.service.update(email, updateClientDto);
  }

  //deleta
  @Delete(":email")
  remove(@Param("email") email: string) {
    return this.service.remove(email);
  }
}
