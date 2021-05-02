import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './user.input';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private UserService: UserService) { }
  
  @Query((returns) => UserType)
  User(
    @Args('id') id:string
  ) {
    return this.UserService.getUser(id)
  }

  @Query((returns) => [UserType])
  Users() {
    return this.UserService.getAllUsers()
    }

  @Mutation((returns) => UserType)
  createUser(
    @Args('createUserInput') createUserInput:CreateUserInput
  ) {
    return this.UserService.createUser( createUserInput)
   }
}
