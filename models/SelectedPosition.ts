import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Member} from "./Member";
import {Position} from "./Position";

@Entity()
export class SelectedPosition {
  @PrimaryGeneratedColumn("uuid")
  uuid: string | null;

  @ManyToOne(() => Member, (member) => member.uuid)
  member: Member;

  @OneToOne(() => Position, (position) => position.uuid)
  position: Position;

  @Column()
  selectedCount: number;
}
