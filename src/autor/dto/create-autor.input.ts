import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAutorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
