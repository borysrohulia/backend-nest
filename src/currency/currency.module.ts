import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyController } from './currency.controller';
import { Currency } from './currency.entity';
import { CurrencyService } from './currency.service';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService],
  imports: [TypeOrmModule.forFeature([Currency])],
  exports: [CurrencyService],
})
export class CurrencyModule {}
