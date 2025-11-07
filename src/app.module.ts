import { Module } from '@nestjs/common';
import { InterfaceModule } from './interface/interface.module';
import { UseCaseModule } from './use-case/use-case.module';
import { DomainModule } from './domain/domain.module';
import { CommonModule } from '@libs/common/common.module';

@Module({
  imports: [
    CommonModule,
    DomainModule,
    UseCaseModule,
    InterfaceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}