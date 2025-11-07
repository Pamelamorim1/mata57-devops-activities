import { Inject, Injectable } from '@nestjs/common';
import type { IGreetingRepository } from '../domain/greeting/greeting.repository.interface';
import { GREETING_REPOSITORY } from '../domain/greeting/greeting.repository.interface';
import type { Greeting } from '../domain/greeting/greeting.entity';

@Injectable()
export class CreateGreetingUseCase {
  constructor(
    @Inject(GREETING_REPOSITORY)
    private readonly greetingRepository: IGreetingRepository,
  ) {}

  execute(name: string): Greeting {
    if (!name) {
      throw new Error('Name is required');
    }
    // A "lógica" é simplesmente chamar o repositório para criar a saudação
    return this.greetingRepository.create(name);
  }
}