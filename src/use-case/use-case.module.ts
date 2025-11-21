import { Module } from '@nestjs/common';
import { CreateGreetingUseCase } from './create-greeting.use-case';
import { InfraModule } from '../infra/infra.module';
import { ClientsService } from './clients/clients.service';
import { AdmService } from "./adm/adm.service";
@Module({
  imports: [InfraModule],
  providers: [
    CreateGreetingUseCase,
    ClientsService,  
    AdmService,
  ],
  exports: [
    CreateGreetingUseCase,
    ClientsService, 
    AdmService,
  ],
})
export class UseCaseModule {}
