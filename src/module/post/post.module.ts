import {Module} from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "@core/database/entity/post.entity";
import {Dislike} from "@core/database/entity/dislike.entity";
import {Like} from "@core/database/entity/like.entity";
import {JwtService} from "@nestjs/jwt";

@Module({
  imports:[
    TypeOrmModule.forFeature([Post, Like, Dislike]),
  ],
  controllers: [PostController],
  providers: [PostService, JwtService]
})
export class PostModule {}
