import { Module } from '@nestjs/common';
import { GREETING_REPOSITORY } from '../domain/greeting/greeting.repository.interface';
import { MemoryGreetingRepository } from './repositories/memory-greeting.repository';

@Module({
  providers: [
    {
      provide: GREETING_REPOSITORY,
      useClass: MemoryGreetingRepository,
    },
  ],
  exports: [
    GREETING_REPOSITORY, // Exporta o provider para o UseCaseModule usar
  ],
})
export class InfraModule {}