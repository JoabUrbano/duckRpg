import { Entity, Column, PrimaryGemeratedColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestXp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    points: number;

    @Column()
    isFixed: boolean
}