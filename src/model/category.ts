import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name : 'category'})
export class Category {
    @PrimaryGeneratedColumn({type: 'int'})
    public idCategory: number;
    @Column({type: 'varchar'})
    public nameCategory: string;
}