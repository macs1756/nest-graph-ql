import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Autor } from './Autor';

@Entity({ name: 'posts' })
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  timestamp: Date;
  
  @ManyToOne(() => Autor, author => author.posts)
  @JoinColumn({ name: 'autor_id'})
  @Field(() => Autor)
  author: Autor;

}
