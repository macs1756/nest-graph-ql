import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/graphql/models/Post';
import { Repository } from 'typeorm';
import { Autor } from 'src/graphql/models/Autor';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(Autor) 
    private autorRepository: Repository<Autor>
  ) {}


  async create(createPostDto: CreatePostInput): Promise<Post> {
    const { authorId, ...postData } = createPostDto;

    const author = await this.autorRepository.findOne({ where: { id: authorId } });

    const newPost = this.postRepository.create({
      ...postData,
      timestamp: new Date(),
      author: author
    });

    // Збереження нового посту у базі даних
    return await this.postRepository.save(newPost);
}



  findAll() {
    return this.postRepository.find({relations: ['author']});
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
