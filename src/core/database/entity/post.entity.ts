import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Auth} from "@core/database/entity/auth.entity";

@Entity()
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    author!: string;

    @Column()
    title!: string;

    @Column()
    text!: string;

    @Column({default: 0})
    like!: number;

    @Column({default: 0})
    dislike!: number;

    @ManyToOne(() => Auth, (user) => user.id)
    @JoinColumn({ name: 'author' })
    user!: Auth;
}