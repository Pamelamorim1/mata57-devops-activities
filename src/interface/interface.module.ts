import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UseCaseModule } from '../use-case/use-case.module';
import { ClientsController } from './controllers/clients/clients.controller';
import { AdmController } from './controllers/user_adm/adm.controller';

@Module({
  imports: [UseCaseModule],
  controllers: [
    AppController,
    ClientsController,
    AdmController,
  ],
})
export class InterfaceModule {}
