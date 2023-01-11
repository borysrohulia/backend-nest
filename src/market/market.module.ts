import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketController } from './market.controller';
import { Market } from './market.entity';
import { MarketService } from './market.service';

@Module({
  controllers: [MarketController],
  providers: [MarketService],
  imports: [TypeOrmModule.forFeature([Market])],
  exports: [MarketService],
})
export class MarketModule {}
