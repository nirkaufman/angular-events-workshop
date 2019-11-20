import { Module } from '@nestjs/common';
import { EventModule } from './events/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './events/event.entity';

@Module({
  imports: [EventModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "nirkaufman",
    password: "",
    database: "events_db",
    entities: [EventEntity],
    synchronize: true
  })]

})
export class AppModule {

}
