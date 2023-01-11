import { ApiProperty } from '@nestjs/swagger';
// import { Currency } from 'src/currency/currency.entity';
// import { Market } from 'src/market/market.entity';

export class CreateAssetDto {
  @ApiProperty({ example: '10', description: 'amount of currency, min 0' })
  amount?: string;

  // @ApiProperty({ example: 'BTC', description: 'any currency' })
  // currency: number;

  // @ApiProperty({ example: 'Binance', description: 'any market' })
  // market?: number;
}
