import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from "./User";
import { Position } from "./Position";

@Entity()
export class Event {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  name: string;

  @Column()
  account: string;

  @Column({nullable: true})
  imageUrl: string;

  @OneToOne((type) => User, (user) => user.uuid)
  owner: User;

  @OneToMany((type) => Position, (position) => position.event, {cascade: ['insert', 'update'], eager: true})
  positions: Array<Position>;

  constructor(name: string, account: string, imageUrl: string, owner: User, positions: Array<Position>) {
    this.name = name;
    this.account = account;
    this.imageUrl = imageUrl;
    this.owner = owner;
    this.positions = positions;
  }
}
