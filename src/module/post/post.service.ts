import {HttpException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Post} from "@core/database/entity/post.entity";
import {createPost} from "@common/dto/createPost.dto";
import {Like} from "@core/database/entity/like.entity";
import {PageOptionsDto} from "@common/dto/pagination.dto";

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>,
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

    async like(id: {id: string}, userId: {id: string}){
        const post = await this.postRepository.findOne({where: id})
        if(!post)
        {
            throw new HttpException('Null Post', 404)
        }
        const like = await this.likeRepository.findOne({where: {userId: userId.id, postId: id.id}})
        if(like){
            throw new HttpException('Conflict', 409)
        }
        await this.likeRepository.save({
            userId:userId.id,
            postId: post.id
        })
        return {
            message: "success"
        }
    }
    async dislike(id: {id: string}, userId: {id:string}){
        const post = await this.postRepository.findOne({where: id})
        if(!post)
        {
            throw new HttpException('Null Post', 404)
        }
        const like = await this.likeRepository.findOne({where: {userId: userId.id, postId: id.id}})
        if(like){
            throw new HttpException('Conflict', 409)
        }
        await this.likeRepository.save({
            userId:userId.id,
            postId: post.id
        })
        return {
            message: "success"
        }
    }
    async getPosts(pagination: PageOptionsDto){
        const posts = await this.postRepository
            .find({
                take: pagination.take,
                skip: pagination.skip,
            })
            .catch((err) => {
                console.error(err);
                throw new HttpException('Error downloading data from DB',500);
            });
        return posts
    }
}
