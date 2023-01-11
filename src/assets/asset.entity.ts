import { IsPositive } from 'class-validator';
import { Currency } from 'src/currency/currency.entity';
import { Market } from 'src/market/market.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsPositive()
  amount: string;

  @ManyToOne(() => Currency, (currency) => currency.assets, { eager: true })
  @JoinTable()
  currency: Currency;

  @ManyToOne(() => Market, (market) => market.assets, { eager: true })
  @JoinTable()
  market: Market;

  @ManyToOne(() => User, (user) => user.assets)
  @JoinTable()
  user: User;
}
