import { ApiProperty } from '@nestjs/swagger';

export class CreateCurrencyDto {
  @ApiProperty({ example: 'Bitcoin', description: 'name of exchange' })
  name: string;
}
