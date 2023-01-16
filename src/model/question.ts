import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name : 'question'})
export class Question {
    @PrimaryGeneratedColumn({type: 'int'})
    public idQuestion: number;
    @Column({type: 'varchar'})
    public nameQuestion: string;
    @Column({type: 'int',default: 0})
    public pointQuestion: number;
    @Column({type: 'int'})
    public idTest: number;
    @Column({type: 'int'})
    public idUserCreate : number;
}