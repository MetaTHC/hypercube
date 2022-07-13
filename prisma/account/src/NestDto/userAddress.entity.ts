
import {User} from './user.entity'


export class UserAddress {
  user?: User ;
userId: number ;
address: string  | null;
city: string  | null;
state: string  | null;
country: string  | null;
zip: string  | null;
}
