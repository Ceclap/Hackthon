import {Module} from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "@core/database/entity/post.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
