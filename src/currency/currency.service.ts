import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCurrencyDto } from './create-currency.dto';
import { Currency } from './currency.entity';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}

  async createExchange(currencyDto: CreateCurrencyDto) {
    const candidateCurrency = await this.findCurrencyByName(currencyDto.name);

    if (candidateCurrency) {
      throw new HttpException(
        'This currency already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newCurrency = await this.currencyRepository.save(currencyDto);
    return newCurrency;
  }

  private async findCurrencyByName(name: string) {
    const currency = await this.currencyRepository.findOne({
      where: { name: name.toLowerCase() },
    });

    return currency;
  }

  async getCurrencyById(id: number) {
    const currency = await this.currencyRepository.findOne({
      where: { id },
    });

    return currency;
  }

  async getAllCurrencies() {
    return await this.currencyRepository.find();
  }
}
