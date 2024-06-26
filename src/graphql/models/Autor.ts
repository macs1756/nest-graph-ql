import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './Post';

@Entity({ name: 'autor' })
@ObjectType()
export class Autor {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  adress: string;

  @Column()
  @Field()
  timestamp: Date;

  @OneToMany(() => Post, post => post.author)
  @Field(() => [Post], { nullable: true }) 
  posts: Post[];

}
