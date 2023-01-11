import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './create-role.dto';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async createRole(dto: CreateRoleDto) {
    return await this.roleRepository.save(dto);
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({
      where: { value: value.toUpperCase() },
    });
    return role;
  }
}
