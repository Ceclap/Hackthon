import {HttpException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Post} from "@core/database/entity/post.entity";
import {createPost} from "@common/dto/createPost.dto";

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) {
    }

    async createPost(data: createPost){
        const post = await this.postRepository.save({
         ...data
        })
        return {
            id:post.id
        }
    }

    async like(id: {id: string}){
        const post = await this.postRepository.findOne({where: id})
        if(!post)
        {
            throw new HttpException('Null Post', 404)
        }
        await this.postRepository.update(id, {like: ++post.like} )
        return {
            message: "success"
        }
    }
    async dislike(id: {id: string}){
        const post = await this.postRepository.findOne({where: id})
        if(!post)
        {
            throw new HttpException('Null Post', 404)
        }
        console.log(post.dislike)
        await this.postRepository.update(id, {dislike: ++post.dislike} )
        return {
            message: "success"
        }
    }
}
