import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from 'src/graphql/models/Autor';
import { Post } from 'src/graphql/models/Post';
import { Repository } from 'typeorm';
import { CreateAutorInput } from './dto/create-autor.input';
import { UpdateAutorInput } from './dto/update-autor.input';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor) private autorRepository: Repository<Autor>,
    @InjectRepository(Post) private postRepository: Repository<Post>
  ) { }


  async create(createAutorInput: CreateAutorInput) {

    const { adress, email, postsId } = createAutorInput

    const newAutor = this.autorRepository.create({
      adress,
      email,
      timestamp: new Date(),
      posts: []
    })


    const fetchPosts = async (postsId: number[]): Promise<Post[]> => {
      const postsPromises = postsId.map(id => this.postRepository.findOneBy({ id }));
      const posts = await Promise.all(postsPromises);  
      return posts;
    };

    newAutor.posts = await fetchPosts(postsId);

    this.autorRepository.save(newAutor)

    const currentAutor = await this.autorRepository.findOne({ where: { id: 50 }, relations:['posts'] });
    
    return currentAutor;
  }

  findAll() {
    return `This action returns all autor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorInput: UpdateAutorInput) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
