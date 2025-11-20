import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { AdmDto } from "src/interface/dtos/adm.dto";

@Injectable()
export class AdmService {
  private adms: AdmDto[] = [];
  private lastId = 0;

  create(data: AdmDto): AdmDto {
    const existe = this.adms.find(a => a.email === data.email);
    if (existe) {
      throw new BadRequestException("Já existe um administrador com esse email");
    }

    const novo = {
      ...data,
      id: ++this.lastId,
    };

    this.adms.push(novo);
    return novo;
  }

  findAll(): AdmDto[] {
    return this.adms;
  }

  findOne(email: string): AdmDto {
    const adm = this.adms.find(a => a.email === email);
    if (!adm) {
      throw new NotFoundException("Administrador não encontrado");
    }
    return adm;
  }

  update(email: string, data: Partial<AdmDto>): AdmDto {
    const index = this.adms.findIndex(a => a.email === email);

    if (index === -1) {
      throw new NotFoundException("Administrador não encontrado");
    }

    this.adms[index] = {
      ...this.adms[index],
      ...data,
    };

    return this.adms[index];
  }

  remove(email: string): AdmDto {
    const index = this.adms.findIndex(a => a.email === email);

    if (index === -1) {
      throw new NotFoundException("Administrador não encontrado");
    }

    const removido = this.adms.splice(index, 1)[0];
    return removido;
  }
}
