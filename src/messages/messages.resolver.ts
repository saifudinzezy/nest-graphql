import { Mutation, Args, Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
  messagesThatReallyShouldBeInADb = [
    {
      id: 0,
      description: 'The seed message',
    },
  ];

  @Query()
  messages() {
    return this.messagesThatReallyShouldBeInADb;
  }

  @Mutation()
  createMessage(
    @Args('description')
    description: string,
  ) {
    const id = this.messagesThatReallyShouldBeInADb.length;
    const newMessage = {
      id,
      description,
    };
    this.messagesThatReallyShouldBeInADb.push(newMessage);
    return newMessage;
  }
}
