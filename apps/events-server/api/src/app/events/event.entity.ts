import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @Column()
  published:boolean;
}


export interface IEvent {
  id?:number;
  title:string;
  description:string;
  published:boolean;
}
