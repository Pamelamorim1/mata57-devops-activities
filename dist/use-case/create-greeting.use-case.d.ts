import type { IGreetingRepository } from '../domain/greeting/greeting.repository.interface';
import type { Greeting } from '../domain/greeting/greeting.entity';
export declare class CreateGreetingUseCase {
    private readonly greetingRepository;
    constructor(greetingRepository: IGreetingRepository);
    execute(name: string): Greeting;
}
