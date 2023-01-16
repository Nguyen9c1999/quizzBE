import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: 'int'})
    public idUser: number;
    @Column({type: 'varchar'})
    public username: string;
    @Column({type: 'varchar'})

    public password: string;
}