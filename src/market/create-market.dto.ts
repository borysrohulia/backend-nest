import { ApiProperty } from '@nestjs/swagger';

export class CreateMarketDto {
  @ApiProperty({ example: 'Binance', description: 'name of stock' })
  name: string;
}
