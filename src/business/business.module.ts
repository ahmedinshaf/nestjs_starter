import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';
import { BusinessResolver } from './business.resolver';
import { BusinessService } from './business.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Business])
  ],
  providers: [
    BusinessResolver,
    BusinessService
  ]
})
export class LessonModule {}
