
import {UserProfile} from './userProfile.entity'
import {UserBilling} from './userBilling.entity'
import {UserAddress} from './userAddress.entity'
import {UserRoles} from './userRoles.entity'


export class User {
  id: number ;
username: string  | null;
email: string ;
password: string ;
profile?: UserProfile  | null;
billing?: UserBilling  | null;
address?: UserAddress  | null;
roles?: UserRoles[] ;
verified: boolean ;
public_key: string  | null;
wallet_address: string  | null;
createdAt: Date ;
updatedAt: Date ;
}
