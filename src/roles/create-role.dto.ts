import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'role of user' })
  value: string;

  @ApiProperty({
    example: 'admin is main shtrih',
    description: 'provide description for role',
  })
  description: string;
}
