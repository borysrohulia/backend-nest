import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Asset } from './asset.entity';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { AuthModule } from '../auth/auth.module';
import { CurrencyModule } from 'src/currency/currency.module';
import { MarketModule } from 'src/market/market.module';

@Module({
  controllers: [AssetsController],
  providers: [AssetsService],
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Asset]),
    AuthModule,
    CurrencyModule,
    MarketModule,
  ],
})
export class AssetsModule {}
