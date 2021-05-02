import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './user.input';
import {v4 as uuid } from 'uuid'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async createUser(
    createUserInput:CreateUserInput
  ): Promise<User> {
    const {firstName,lastName} = createUserInput
    const User = this.UserRepository.create({
      id: uuid(),
      firstName,
      lastName
    });
    return this.UserRepository.save(User);
  }
  async getUser(id: string): Promise<User> {
    return this.UserRepository.findOne({id});
  }

  async getAllUsers(): Promise<User[]>{
    return this.UserRepository.find()
  }
}
