import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateBusinessInput } from './business.input.dto';
import { BusinessService } from './business.service';
import { BusinessType } from './business.type';

@Resolver((of) => BusinessType)
export class BusinessResolver {
  constructor(private businessService: BusinessService) { }
  
  @Query((returns) => BusinessType)
  business(
    @Args('id') id:string
  ) {
    return this.businessService.getBusiness(id)
  }

  @Query((returns) => [BusinessType])
  businesses() {
    return this.businessService.getAllBusiness()
    }

  @Mutation((returns) => BusinessType)
  createBusiness(
    @Args('createBusinessInput') createBusinessInput:CreateBusinessInput
  ) {
    return this.businessService.createBusiness(createBusinessInput)
   }
}
