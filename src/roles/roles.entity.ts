import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @ApiProperty({ example: 1, description: 'unique id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'role of user' })
  @Column()
  value: string;

  @ApiProperty({
    example: 'admin is main shtrih',
    description: 'provide description for role',
  })
  @Column()
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
