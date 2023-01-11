import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
import { Asset } from 'src/assets/asset.entity';
import { Role } from 'src/roles/roles.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'unique id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'email@email.com', description: 'unique email' })
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'passwordqwerty',
    description: 'password with length from 8 to 35 symbols',
  })
  @Column()
  @Length(8, 35)
  password: string;

  @ApiProperty({
    example: [
      {
        id: 1,
        value: 'ADMIN',
        description: 'admin is main shtrih',
      },
    ],
    description: 'roles of user',
  })
  @ManyToMany(() => Role, (role) => role.users, { eager: true })
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Asset, (asset) => asset.user)
  assets: Asset[];
}
