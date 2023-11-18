import {Body, Controller, Delete, Get, Param, Post, Query, UseGuards} from '@nestjs/common';
import {ApiCookieAuth, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PostService} from "./post.service";
import {createPost} from "@common/dto/createPost.dto";
import {AuthGuard} from "@common/guards/auth.guard";
import {Client} from "@common/decorators/client.decorator";
import {PageOptionsDto} from "@common/dto/pagination.dto";

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
    @ApiCookieAuth()
    @UseGuards(AuthGuard)
    @Post('like/:id')
    async like(@Param() id: {id:string}, @Client() userId: { id:string })
    {
        return this.postService.like(id,userId)
    }
    @ApiParam({
        name: 'id',
        type: String,
        description: 'UUID of the Post',
    })
    @UseGuards(AuthGuard)
    @Post('dislike/:id')
    async dislike(@Param() id: {id:string},@Client() userId: { id:string })
    {
        return this.postService.dislike(id, userId)
    }

    @Get('all')
    async getPosts(@Query() data: PageOptionsDto){
        return this.postService.getPosts(data)
    }

    @UseGuards(AuthGuard)
    @Get()
    async getPost(@Query() data: PageOptionsDto, @Client() id: {id: string}){
        return this.postService.getPost(data, id)
    }

    @ApiParam({
        name: 'id',
        type: String,
        description: 'UUID of the Post',
    })
    @UseGuards(AuthGuard)
    @Delete(':id')
    async deletePost(@Param() id: {id:string}){
        return this.postService.deletePost(id)
    }

}
