import {Body, Controller, Param, Post} from '@nestjs/common';
import {ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PostService} from "./post.service";
import {createPost} from "@common/dto/createPost.dto";

@ApiTags('post')
@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {
    }

    @ApiResponse({
        schema: {
            properties: {
                id: {
                    type: 'string',
                    example: '12312424-124124-21412'
                },
            },
        },
        status: 201,
        description: 'Ok',
    })
    @Post()
    async createPost(@Body() data:createPost){
        return this.postService.createPost(data)
    }

    @ApiParam({
        name: 'id',
        type: String,
        description: 'UUID of the Post',
    })
    @Post('like/:id')
    async like(@Param() id: {id:string})
    {
        return this.postService.like(id)
    }
    @ApiParam({
        name: 'id',
        type: String,
        description: 'UUID of the Post',
    })
    @Post('dislike/:id')
    async dislike(@Param() id: {id:string})
    {
        return this.postService.like(id)
    }
}
