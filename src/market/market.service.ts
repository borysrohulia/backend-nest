import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarketDto } from './create-market.dto';
import { Market } from './market.entity';

@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(Market)
    private marketRepository: Repository<Market>,
  ) {}

  async createMarket(marketDto: CreateMarketDto) {
    const candidateMarket = await this.findMarketByName(marketDto.name);

    if (candidateMarket) {
      throw new HttpException(
        'This market already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newMarket = await this.marketRepository.save(marketDto);
    return newMarket;
  }

  private async findMarketByName(name: string) {
    const market = await this.marketRepository.findOne({
      where: { name: name.toLowerCase() },
    });

    return market;
  }

  async getMarketById(id: number) {
    const market = await this.marketRepository.findOne({
      where: { id },
    });

    return market;
  }

  async getAllMarkets() {
    return await this.marketRepository.find();
  }
}
