import { Injectable, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // create user
  async createUser(email: string, password: string) {
    // remove any case sensitivity from our email address
    const lowerCaseEmail = email.toLowerCase();
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // sabe the user
    const user = this.prisma.mutation.createUser({
      data: {
        email: lowerCaseEmail,
        password: hashedPassword,
      },
    });

    // return the newly saved user
    return user;
  }

  // update user
  async updateUser(idUser: number, email: string, password: string) {
    // const ids = idUser;
    // remove any case sensitivity from our email address
    const lowerCaseEmail = email.toLowerCase();
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // sabe the user
    const user = this.prisma.mutation.updateUser({
      data: {
        email: lowerCaseEmail,
        password: hashedPassword,
      },
      where: {
        id: idUser,
      },
    });

    // return the newly saved user
    return user;
  }
}
