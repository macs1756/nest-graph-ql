import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(40)
  @Field()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(40)
  @Field()
  description: string;

  @IsNumber()
  @Field()
  authorId: number;
  
}
