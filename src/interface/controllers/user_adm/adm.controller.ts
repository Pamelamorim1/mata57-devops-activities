import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { AdmDto } from "src/interface/dtos/adm.dto";

//FAZER TESTE UTILIZANDO POSTMAN OU SIMILAR
let administradores: AdmDto[] = []; //alterar para tabela quando tiver uma base de dados

@Controller("adm")

export class AdmController {

  //criar
    @Post()
    create(@Body() createAdmDto: AdmDto) {
    const existente = administradores.find(x => x.email === createAdmDto.email);
    if (existente) {
      throw new BadRequestException("Adm já cadastrado com esse Email");
    }
  
    administradores.push(createAdmDto);
    return createAdmDto;
  }
   //retorno todos
    @Get()
    findAll(): AdmDto[] {
      return administradores;
    }
    //retorna 1
    @Get(":email")
    findOne(@Param("email") email: string): AdmDto | undefined {
    return administradores.find(x => x.email === email);
  }
  //atualizaçao
  @Put(":email")
  update(@Param("email") email: string, @Body() updateAdmDto: Partial<AdmDto>) {
    const index = administradores.findIndex(x => x.email === email); // ou email se você tiver email real
    
    console.log(index)
    console.log(email)
    console.log(updateAdmDto)
    if (index === -1) {
      throw new NotFoundException("Adm não encontrado");
    }
    administradores[index] = { ...administradores[index], ...updateAdmDto };
    return administradores[index];
  }
  //deleta
  @Delete(":email")
  remove(@Param("email") email: string) {
    const index = administradores.findIndex(x => x.email === email);
  
    if (index === -1) {
      throw new NotFoundException("Adm não encontrado");
    }
  
    const removido = administradores.splice(index, 1)[0];
    return removido;
  }
  }