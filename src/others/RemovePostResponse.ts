import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RemovePostResponse {
  @Field()
  message: string;
}