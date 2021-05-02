import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @MinLength(1)
  @Field()
  firstName: string;

  @Field()
  lastName: string;

}
