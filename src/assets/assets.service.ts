import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyService } from 'src/currency/currency.service';
import { MarketService } from 'src/market/market.service';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';
// import { CreateAssetDto } from './create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
    private userService: UsersService,
    private marketService: MarketService,
    private currencyService: CurrencyService,
  ) {}

  async createAsset(assetDto, userObj: User) {
    const user = await this.userService.getUserById(userObj.id);
    console.log(user);
    const market = await this.marketService.getMarketById(assetDto.market);
    const currency = await this.currencyService.getCurrencyById(
      assetDto.currency,
    );
    const asset = await this.assetRepository.save({ ...assetDto, user: user });

    asset.user = user;
    asset.market = market;
    asset.currency = currency;

    return asset;
  }

  async getAssets(user) {
    console.log('user: ', user);
    const assets = await this.assetRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
      select: {
        amount: true,
      },
      relations: {
        currency: true,
        market: true,
      },
    });

    return assets;
  }
}
