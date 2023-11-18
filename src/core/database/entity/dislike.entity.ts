import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "@core/database/entity/post.entity";

@Entity()
export class Dislike {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    userId!: string;

    @ManyToOne(() => Post, (post) => post.id)
    @JoinColumn({ name: 'postId' })
    post!: string;

    @Column()
    postId!: string;
}
