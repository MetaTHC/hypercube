
import {User} from './user.entity'
import {UserInvoice} from './userInvoice.entity'
import {UserSubscriptions} from './userSubscriptions.entity'


export class UserBilling {
  id: number ;
user?: User ;
userId: number ;
accountName: string  | null;
accountNumber: string  | null;
bankName: string  | null;
sortCode: string  | null;
invoice?: UserInvoice  | null;
subscription?: UserSubscriptions  | null;
}
