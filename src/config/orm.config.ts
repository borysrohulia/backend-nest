import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Asset } from 'src/assets/asset.entity';
import { Currency } from 'src/currency/currency.entity';
import { Role } from 'src/roles/roles.entity';
import { Market } from 'src/market/market.entity';
import { User } from 'src/users/user.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User, Role, Asset, Currency, Market],
    synchronize: true,
  }),
);
