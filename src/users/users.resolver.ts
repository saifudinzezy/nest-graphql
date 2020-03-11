import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly suser: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Query()
  users(@Args() args) {
    return this.prisma.query.users(args);
  }

  @Query()
  user(@Args() args) {
    return this.prisma.query.user(args);
  }

  @Mutation()
  async createUser(
    @Args('data')
    data: {
      email: string;
      password: string;
    },
  ) {
    const user = await this.suser.createUser(data.email, data.password);
    return user;
  }

  @Mutation()
  async updateUser(@Args() args) {
    const user = await this.suser.updateUser(
      args.where.id,
      args.data.email,
      args.data.password,
    );
    return user;
  }

  @Mutation()
  deleteUser(@Args() args) {
    return this.prisma.mutation.deleteUser(args);
  }
}
