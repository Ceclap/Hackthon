import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Dislike {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    userId!: string;

    @Column()
    postId!: string;
}
