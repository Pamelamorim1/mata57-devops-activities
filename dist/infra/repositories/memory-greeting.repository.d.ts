import type { IGreetingRepository } from '../../domain/greeting/greeting.repository.interface';
import type { Greeting } from '../../domain/greeting/greeting.entity';
export declare class MemoryGreetingRepository implements IGreetingRepository {
    create(name: string): Greeting;
}
