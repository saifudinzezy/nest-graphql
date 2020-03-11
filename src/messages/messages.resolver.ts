import { Mutation, Args, Resolver, Query } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Message')
export class MessagesResolver {
  dataMessage = [
    {
      id: 0,
      description: 'The seed message',
    },
  ];

  @Query()
  messages() {
    return this.dataMessage;
  }

  @Query('message')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ) {
    return this.dataMessage.find(c => c.id === id);
  }

  @Mutation()
  createMessage(
    @Args('description')
    description: string,
  ) {
    const id = this.dataMessage.length;
    const newMessage = {
      id,
      description,
    };
    this.dataMessage.push(newMessage);
    return newMessage;
  }

  @Mutation()
  updateMessage(
    @Args('message')
    message: any,
  ) {
    this.dataMessage = this.dataMessage.map(c => {
      if (c.id === message.id) {
        return { ...message };
      }
      return c;
    });
    return message;
  }

  @Mutation()
  deleteMessage(
    @Args('id', ParseIntPipe)
    id: number,
  ) {
    const message = this.dataMessage.find(c => c.id === id);
    this.dataMessage = this.dataMessage.filter(c => c.id !== id);
    return message;
  }
}
