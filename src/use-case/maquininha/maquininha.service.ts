import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { MaquininhaDto } from '../../interface/dtos/maquininha.dto';

@Injectable()
export class MaquininhaService {
  private maquininhas: MaquininhaDto[] = []; 

  // CREATE (Já estava pronto)
  create(maquininha: MaquininhaDto) {
    const existe = this.maquininhas.find(m => m.serial_number === maquininha.serial_number);
    if (existe) {
      throw new BadRequestException(`Maquininha ${maquininha.serial_number} já existe!`);
    }
    this.maquininhas.push(maquininha);
    return maquininha;
  }

  // ADICIONE ISSO NO SEU SERVICE
  createMany(listaMaquininhas: MaquininhaDto[]) {
  // AQUI ESTÁ A CORREÇÃO: Dizemos explicitamente o tipo
  const resultados: MaquininhaDto[] = [];

  for (const maquina of listaMaquininhas) {
      this.create(maquina);
      resultados.push(maquina);
  }
  return resultados;
    }

  // READ ALL (Já estava pronto)
  findAll() {
    return this.maquininhas;
  }

  // READ ONE (Busca por serial)
  findOne(serial: string) {
    const maquina = this.maquininhas.find(m => m.serial_number === serial);
    if (!maquina) {
        throw new NotFoundException("Maquininha não encontrada");
    }
    return maquina;
  }

  // UPDATE (Novo! - Atualiza dados da máquina)
  update(serial: string, updateData: Partial<MaquininhaDto>) {
    const index = this.maquininhas.findIndex(m => m.serial_number === serial);
    
    if (index === -1) {
       throw new NotFoundException("Maquininha não encontrada para atualizar");
    }
    
    // Mantém os dados antigos e sobrescreve só o que veio novo
    this.maquininhas[index] = { ...this.maquininhas[index], ...updateData };
    return this.maquininhas[index];
  }

  // DELETE (Novo! - Remove a máquina)
  remove(serial: string) {
    const index = this.maquininhas.findIndex(m => m.serial_number === serial);

    if (index === -1) {
      throw new NotFoundException("Maquininha não encontrada para deletar");
    }

    // Remove 1 item a partir daquele index
    const removido = this.maquininhas.splice(index, 1);
    return { message: `Maquininha ${serial} removida com sucesso` };
  }
}