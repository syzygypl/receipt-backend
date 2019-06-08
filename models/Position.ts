import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Position {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    name1: string;

    @Column()
    count: number;

    @Column()
    price: number;
}
