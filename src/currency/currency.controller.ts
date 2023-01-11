import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCurrencyDto } from './create-currency.dto';
import { CurrencyService } from './currency.service';

@ApiTags('Currency')
@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  create(@Body() exchangeDto: CreateCurrencyDto) {
    return this.currencyService.createExchange(exchangeDto);
  }

  @Get()
  getAllCurrencies() {
    return this.currencyService.getAllCurrencies();
  }

  @Get(':id')
  getExchangeById(@Param('id') id: number) {
    return this.currencyService.getCurrencyById(id);
  }
}
