
import {Prisma} from '@prisma/client'




export class UpdateUserSubscriptionsDto {
  creators?: Prisma.InputJsonValue;
bloggers?: Prisma.InputJsonValue;
vloggers?: Prisma.InputJsonValue;
}
