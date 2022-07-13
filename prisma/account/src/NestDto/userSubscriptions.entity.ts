
import {Prisma} from '@prisma/client'
import {UserBilling} from './userBilling.entity'


export class UserSubscriptions {
  billing?: UserBilling ;
user_billingId: number ;
creators: Prisma.JsonValue ;
bloggers: Prisma.JsonValue ;
vloggers: Prisma.JsonValue ;
vip: boolean ;
social: boolean ;
vendor: boolean ;
creator: boolean ;
blogger: boolean ;
vlogger: boolean ;
partner: boolean ;
}
