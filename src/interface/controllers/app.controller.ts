import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateGreetingUseCase } from '../../use-case/create-greeting.use-case';
import type { CreateGreetingDto } from '../dtos/create-greeting.dto';
import type { Greeting } from '../../domain/greeting/greeting.entity';

@Controller()
export class AppController {
  constructor(
    private readonly createGreetingUseCase: CreateGreetingUseCase,
  ) {}

  @Post('hello')
  @HttpCode(HttpStatus.OK)
  createHello(@Body() createGreetingDto: CreateGreetingDto): Greeting {
    return this.createGreetingUseCase.execute(createGreetingDto.name);
  }

// Rota original mantida
  @Get('/health/check')
  checkHealth(@Query('data') data: string | undefined): string { // <-- Altere aqui
    if (!data) {
      return 'API saudável (sem dados para processar)!';
    }

    try {
      // Parse o array do parâmetro de query (data) para um array real
      const parsedData = JSON.parse(data);

      // Verifique se o array tem mais de 4 elementos
      if (Array.isArray(parsedData) && parsedData.length > 4) {
        // Percorrer o array
        parsedData.forEach((item, index) => {
          console.log(`Item ${index}: ${item}`);
        });

        // Se o array for válido e percorreu tudo corretamente, retornamos uma resposta saudável
        return 'API saudável!';
      } else {
        throw new Error('Array inválido ou com menos de 5 elementos');
      }
    } catch (error) {
      throw new Error('Dados inválidos: ' + error.message);
    }
  }
}