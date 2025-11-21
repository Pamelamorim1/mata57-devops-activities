import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from "@nestjs/common";
import { AdmDto } from "src/interface/dtos/adm.dto";
import { AdmService } from "src/use-case/adm/adm.service";

//FAZER TESTE UTILIZANDO POSTMAN OU SIMILAR
@Controller("adm")
export class AdmController {
  constructor(private readonly service: AdmService) {}

  //criar
  @Post()
  create(@Body() createAdmDto: AdmDto) {
    return this.service.create(createAdmDto);
  }

  //retorna todos
  @Get()
  findAll(): AdmDto[] {
    return this.service.findAll();
  }

  //retorna 1
  @Get(":email")
  findOne(@Param("email") email: string) {
    return this.service.findOne(email);
  }

  //atualização
  @Put(":email")
  update(
    @Param("email") email: string,
    @Body() updateAdmDto: Partial<AdmDto>,
  ) {
    return this.service.update(email, updateAdmDto);
  }

  //deleta
  @Delete(":email")
  remove(@Param("email") email: string) {
    return this.service.remove(email);
  }
}
