import type { Greeting } from './greeting.entity';
export declare const GREETING_REPOSITORY = "GreetingRepository";
export interface IGreetingRepository {
    create(name: string): Greeting;
}
