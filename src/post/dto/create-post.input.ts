import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {

  @IsString()
  @IsNotEmpty()
  @MinLength(4, { message: 'Повідомлення повинно містити принаймні 4 символи' })
  @MaxLength(40, { message: 'Повідомлення повинно містити максимум 60 символів' })
  @Field()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4, { message: 'Повідомлення повинно містити принаймні 4 символи' })
  @MaxLength(40, { message: 'Повідомлення повинно містити максимум 60 символів' })
  @Field()
  description: string;

  @IsNumber()
  @Field()
  authorId: number;
  
}
