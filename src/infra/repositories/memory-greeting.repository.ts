import { Injectable } from '@nestjs/common';
import type { IGreetingRepository } from '../../domain/greeting/greeting.repository.interface';
import { GREETING_REPOSITORY } from '../../domain/greeting/greeting.repository.interface';
import type { Greeting } from '../../domain/greeting/greeting.entity';

@Injectable()
export class MemoryGreetingRepository implements IGreetingRepository {
  create(name: string): Greeting {
    const message = `Hello, ${name}!`;
    return { message };
  }
}