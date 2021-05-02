import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business/business.entity';
import { LessonModule } from './business/business.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        'postgres://rnykrhkwvrpgqq:c00897fc3db4fdace189105ed90f399935dadcd994cf49474e1de693fe498dbb@ec2-35-174-35-242.compute-1.amazonaws.com:5432/df223ov1jdrijm',
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      },
      entities: [Business,User],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
    UserModule,
  ],
})
export class AppModule {}
