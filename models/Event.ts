import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

import {User} from "./User";
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
    imageUrl?: string;

    @OneToOne((type) => User, (user) => user.uuid)
    owner: string;

    @OneToMany((type) => Position, (position) => position.uuid)
    positions: string;
}
