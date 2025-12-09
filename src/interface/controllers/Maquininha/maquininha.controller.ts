import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common'; // <--- Adicione Delete e Put
import { MaquininhaService } from '../../../use-case/maquininha/maquininha.service'; // Ajuste o caminho se precisar
import { MaquininhaDto } from '../../dtos/maquininha.dto'; // Ajuste o caminho se precisar

@Controller('maquininhas') 
export class MaquininhaController {
  
  constructor(private readonly maquininhaService: MaquininhaService) {}

  @Post('lote') // Rota: /maquininhas/lote
  createBatch(@Body() maquininhas: MaquininhaDto[]) {
    // TEM QUE CHAMAR O createMany
    return this.maquininhaService.createMany(maquininhas);
  }

  @Get()
  findAll() {
    return this.maquininhaService.findAll();
  }

  @Get(':serial')
  findOne(@Param('serial') serial: string) {
    return this.maquininhaService.findOne(serial);
  }

  // ATUALIZAR (PUT)
  // Rota: http://localhost:3000/maquininhas/12345
  @Put(':serial')
  update(@Param('serial') serial: string, @Body() updateData: Partial<MaquininhaDto>) {
    return this.maquininhaService.update(serial, updateData);
  }

  // DELETAR (DELETE)
  // Rota: http://localhost:3000/maquininhas/12345
  @Delete(':serial')
  remove(@Param('serial') serial: string) {
    return this.maquininhaService.remove(serial);
  }
}