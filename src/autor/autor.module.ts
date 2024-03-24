import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorResolver } from './autor.resolver';
import { Autor } from 'src/graphql/models/Autor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/graphql/models/Post';

@Module({
  imports: [TypeOrmModule.forFeature([Autor, Post])],
  providers: [AutorResolver, AutorService],
})
export class AutorModule {}
