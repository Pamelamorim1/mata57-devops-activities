import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health/check')
  checkHealth(@Query('data') data: string): string {
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
  }
}
