import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateBusinessInput {

  @MinLength(1)
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  currency: string;

  @Field()
  timeZone: string;

  @Field()
  local: string;

  // @Field()
  // productSku: string;

  // @Field()
  // loyaltyPoints: string;

  // @Field()
  // giftCards: string;

  // @Field()
  // storeCredits: string;

  // @Field()
  // printRecipt: string;

  // @Field()
  // emailCustomer: string;

  // @Field()
  // logo: string;
}
