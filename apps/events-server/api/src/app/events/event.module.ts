import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity])
  ],
  controllers: [EventController,],
  providers: [EventService],
})
export class EventModule {

}
