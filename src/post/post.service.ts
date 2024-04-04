import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/graphql/models/Post';
import { Repository } from 'typeorm';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostInput) {

    console.log(createPostDto.autor_id);
    

    const newUser = this.postRepository.create({
      ...createPostDto,
      autor_id:  96,
      timestamp: new Date(),
    });
    return this.postRepository.save(newUser);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  async update(id: number, updatePostInput: UpdatePostInput) {

    let currentElement = await this.postRepository.findOneBy({ id });

    const { title, description } = updatePostInput

    if (title) {
      currentElement.title = title;
    }

    if (description) {
      currentElement.description = description;
    }

    return this.postRepository.save(currentElement);

  }

  async remove(id: number) {

    const isExist = await this.postRepository.findOneBy({ id });
    
    if(!isExist){
      return { message: `Element with id:${id} not found` };
    }

    await this.postRepository.delete({ id })
    return {message: `Successfully deleted the post with id:${id}`};
  }
}
