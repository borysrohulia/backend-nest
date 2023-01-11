import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMarketDto } from './create-market.dto';
import { MarketService } from './market.service';

@ApiTags('Market')
@Controller('market')
export class MarketController {
  constructor(private marketService: MarketService) {}

  @Post()
  create(@Body() exchangeDto: CreateMarketDto) {
    return this.marketService.createMarket(exchangeDto);
  }

  @Get()
  getAllMarkets() {
    return this.marketService.getAllMarkets();
  }

  @Get(':id')
  getMarketById(@Param('id') id: number) {
    return this.marketService.getMarketById(id);
  }
}
