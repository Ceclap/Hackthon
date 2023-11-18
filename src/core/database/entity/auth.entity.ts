import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "@core/database/entity/post.entity";

@Entity()
export class Auth{

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true})
  username!: string;

  @Column()
  idnp!: string;

  @Column()
  password!: string;

  @Column({ default: null })
  photo!: string;

  @Column({ default: false })
  confirmed!: boolean;

  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[]

}