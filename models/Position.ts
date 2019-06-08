import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./Event";

@Entity()
export class Position {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  name: string;

  @Column()
  count: number;

  @Column()
  price: number;

  @ManyToOne(() => Event, (event) => event.uuid)
  event: Event;

  constructor(name: string, count: number, price: number) {
    this.name = name;
    this.count = count;
    this.price = price;
  }
}
