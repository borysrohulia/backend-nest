import { Asset } from 'src/assets/asset.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Market {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Asset, (asset) => asset.market)
  assets: Asset[];
}
