import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Event} from "./Event";
import {SelectedPosition} from "./SelectedPosition";

@Entity()
export class Member {
  @PrimaryGeneratedColumn("uuid")
  uuid: string | null;

  @Column()
  name: string;

  @ManyToOne(() => Event, (event) => event.uuid)
  event: Event;

  @OneToMany(() => SelectedPosition, (position) => position.member, {cascade: ['insert', 'update'], eager: true})
  positions: Array<SelectedPosition>;

  constructor(name: string) {
    this.name = name;
  }
}
