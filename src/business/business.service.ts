import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './business.entity';
import {v4 as uuid } from 'uuid'
import { CreateBusinessInput } from './business.input.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business) private businessRepository: Repository<Business>,
  ) {}

  async createBusiness(
    createBusinessInput:CreateBusinessInput
  ): Promise<Business> {
    const {name,url,currency,timeZone,local} = createBusinessInput
    const business = this.businessRepository.create({
      id:uuid(),
      name,
      url,
      currency,
      timeZone,
      local,
    });
    return this.businessRepository.save(business);
  }
  async getBusiness(id: string): Promise<Business> {
    return this.businessRepository.findOne({id});
  }

  async getAllBusiness(): Promise<Business[]>{
    return this.businessRepository.find()
  }
}
 