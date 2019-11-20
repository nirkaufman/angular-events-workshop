import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IEvent } from '@angular-events/interfaces';

@Entity('events')
export class EventEntity implements IEvent{

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @Column({nullable: true})
  published:boolean;
}
