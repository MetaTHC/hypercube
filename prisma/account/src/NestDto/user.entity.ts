
import {user_roles} from '@prisma/client'
import {UserProfile} from './userProfile.entity'
import {UserBilling} from './userBilling.entity'
import {UserAddress} from './userAddress.entity'


export class User {
  id: number ;
username: string  | null;
email: string ;
password: string ;
profile?: UserProfile  | null;
billing?: UserBilling  | null;
address?: UserAddress  | null;
roles: user_roles ;
verified: boolean ;
public_key: string  | null;
wallet_address: string  | null;
createdAt: Date ;
updatedAt: Date ;
}
