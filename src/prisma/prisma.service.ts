import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: 'https://us1.prisma.sh/saifudin-585311/nest-prisma/dev',
      debug: false,
    });
  }
}
