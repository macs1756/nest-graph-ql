import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSetting';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { Post } from './graphql/models/Post';
import { PostModule } from './post/post.module';
import { AutorModule } from './autor/autor.module';
import { Autor } from './graphql/models/Autor';
import { GateWayModule } from './gateway/gateway.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: 'src/schema.gql',
        }),
        ConfigModule,
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_LOGIN'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [User, UserSetting, Post, Autor],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    PostModule,
    AutorModule,
    GateWayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
