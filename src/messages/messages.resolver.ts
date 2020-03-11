import { Mutation, Args, Resolver, Query, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  messages(@Args() args) {
    return this.prisma.query.messages(args);
  }

  @Query()
  message(@Args() args) {
    return this.prisma.query.message(args);
  }

  // mutation
  @Mutation()
  createMessage(@Args() args) {
    return this.prisma.mutation.createMessage(args);
  }

  @Mutation()
  updateMessage(@Args() args) {
    return this.prisma.mutation.updateMessage(args);
  }

  @Mutation()
  deleteMessage(@Args() args) {
    return this.prisma.mutation.deleteMessage(args);
  }
}
