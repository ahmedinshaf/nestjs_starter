import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Business')
export class BusinessType {
  @Field((type) => ID)
  id: string;

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
}
