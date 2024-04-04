import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { Post } from 'src/graphql/models/Post';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/graphql/models/Autor';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Autor])],
  providers: [PostResolver, PostService],
})
export class PostModule {}
