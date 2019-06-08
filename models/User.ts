import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Event } from "./Event";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  uuid: string | null;

  @Column()
  name: string;

  @ManyToOne((type) => Event, (event) => event.uuid)
  event: Event;

  constructor(name: string) {
    this.name = name;
  }
}
