import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAutorInput {
  @Field()
  email: string;

  @Field()
  adress: string;

  @Field(() => [Int], { nullable: true })
  postsId?: number[];

}
