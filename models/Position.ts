import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  constructor(name: string, count: number, price: number) {
    this.name = name;
    this.count = count;
    this.price = price;
  }
}
