import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'email@email.com', description: 'unique email' })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'passwordqwerty',
    description: 'password with length from 8 to 35 symbols',
  })
  @Length(8, 35)
  password: string;
}
