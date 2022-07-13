
import {UserBilling} from './userBilling.entity'


export class UserInvoice {
  billing?: UserBilling ;
user_billingId: number ;
invoiceNumber: string  | null;
invoiceDate: Date  | null;
createdAt: Date ;
updatedAt: Date ;
}
