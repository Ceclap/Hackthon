import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Auth} from "@core/database/entity/auth.entity";
import {Dislike} from "@core/database/entity/dislike.entity";
import {Like} from "@core/database/entity/like.entity";

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

    @ManyToOne(() => Auth, (user) => user.id)
    @JoinColumn({ name: 'author' })
    user!: Auth;

    @OneToMany(()=>Dislike, (dislike)=>dislike.postId)
    dislike!: Dislike[]

    @OneToMany(()=>Like, (like)=>like.postId)
    like!: Like[]
}