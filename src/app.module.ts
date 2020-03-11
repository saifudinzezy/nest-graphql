import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MessagesModule } from './messages/messages.module';
import { PrismaModule } from './prisma/prisma.module';
import { PubSub } from 'graphql-subscriptions';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      definitions: {
        path: join(process.cwd(), '/src/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      installSubscriptionHandlers: true,
    }),
    MessagesModule,
    PrismaModule,
    UsersModule,
  ],
  providers: [{ provide: 'PUB_SUB', useValue: new PubSub() }],
})
export class AppModule {}
