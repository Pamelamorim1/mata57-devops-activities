import { Module } from '@nestjs/common';
import { CreateGreetingUseCase } from './create-greeting.use-case';
import { InfraModule } from '../infra/infra.module';

@Module({
  imports: [InfraModule], // Importa o módulo que provê a implementação
  providers: [CreateGreetingUseCase],
  exports: [CreateGreetingUseCase],
})
export class UseCaseModule {}