import { CreateAutorInput } from './create-autor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAutorInput extends PartialType(CreateAutorInput) {
  @Field(() => Int)
  id: number;
}
