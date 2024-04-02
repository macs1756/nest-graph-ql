import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AutorService } from './autor.service';
import { Autor } from '../graphql/models/Autor';
import { CreateAutorInput } from './dto/create-autor.input';
import { UpdateAutorInput } from './dto/update-autor.input';

@Resolver(() => Autor)
export class AutorResolver {
  constructor(private readonly autorService: AutorService) {}

  @Mutation(() => Autor)
  createAutor(@Args('createAutorInput') createAutorInput: CreateAutorInput) {
    return this.autorService.create(createAutorInput);
  }

  @Query(() => [Autor], { name: 'getAllAuthors' })
  getAllAuthors() {
    return this.autorService.findAll();
  }

  @Query(() => Autor, { name: 'autor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.autorService.findOne(id);
  }

  @Mutation(() => Autor)
  updateAutor(@Args('updateAutorInput') updateAutorInput: UpdateAutorInput) {
    return this.autorService.update(updateAutorInput.id, updateAutorInput);
  }

  @Mutation(() => Autor)
  removeAutor(@Args('id', { type: () => Int }) id: number) {
    return this.autorService.remove(id);
  }
}
