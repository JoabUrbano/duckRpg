import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestXp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    points: number;

    @Column()
    isFixed: boolean
}