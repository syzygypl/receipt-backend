import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

import {Member} from "./Member";
import {Position} from "./Position";

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

  @OneToOne(() => Member, (member) => member.uuid)
  owner: Member;

  @OneToMany(() => Position, (position) => position.event, {cascade: ['insert', 'update'], eager: true})
  positions: Array<Position>;

  @OneToMany(() => Member, (member) => member.event, {cascade: ['insert', 'update'], eager: true})
  members: Array<Member>;

  constructor(name: string, account: string, imageUrl: string, owner: Member, positions: Array<Position>) {
    this.name = name;
    this.account = account;
    this.imageUrl = imageUrl;
    this.owner = owner;
    this.positions = positions;
  }
}
