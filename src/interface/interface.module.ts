import { Module } from '@nestjs/common';
// CORRIJA ESTA LINHA:
import { AppController } from './controllers/app.controller'; // <-- Remova o '.spec' e ajuste o caminho
import { UseCaseModule } from '../use-case/use-case.module';

@Module({
  imports: [UseCaseModule],
  controllers: [AppController],
})
export class InterfaceModule {}