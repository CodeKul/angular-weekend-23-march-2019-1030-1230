import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pc {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    make : string

    @Column()
    price : number

    @Column()
    brand : string
}
