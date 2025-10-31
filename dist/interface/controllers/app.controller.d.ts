import { CreateGreetingUseCase } from '../../use-case/create-greeting.use-case';
import type { CreateGreetingDto } from '../dtos/create-greeting.dto';
import type { Greeting } from '../../domain/greeting/greeting.entity';
export declare class AppController {
    private readonly createGreetingUseCase;
    constructor(createGreetingUseCase: CreateGreetingUseCase);
    createHello(createGreetingDto: CreateGreetingDto): Greeting;
    checkHealth(data: string | undefined): string;
}
