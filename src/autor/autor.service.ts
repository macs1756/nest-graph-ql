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

    const postsData = await fetchPosts(postsId);

    const posts = postsData.map(data => ({
      id: data.id,
      title: data.title,
      description: data.description,
      timestamp: new Date(data.timestamp)
    }));

    const postsData2 = [
      { id: 3, title: 'new title 3', description: 'new description', timestamp: new Date('2024-03-22T19:00:25.854Z') },
      { id: 7, title: 'title 5', description: 'Description for this post version2', timestamp: new Date('2024-03-23T18:04:03.271Z') }
    ];

    newAutor.posts = postsData2

    this.autorRepository.save(newAutor)

    const currentAutor = 
    await this.autorRepository.findOne(ChatRoomEntity, {
      where: {id: newAutor.id},
      relations: ['posts'],
    })

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
