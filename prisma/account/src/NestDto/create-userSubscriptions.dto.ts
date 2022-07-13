
import {Prisma} from '@prisma/client'




export class CreateUserSubscriptionsDto {
  creators: Prisma.InputJsonValue;
bloggers: Prisma.InputJsonValue;
vloggers: Prisma.InputJsonValue;
}
