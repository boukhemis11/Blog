import { PrimaryGeneratedColumn, Column } from "typeorm";

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    username: string
}