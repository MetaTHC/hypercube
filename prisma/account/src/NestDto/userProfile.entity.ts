
import {User} from './user.entity'
import {UserConnect} from './userConnect.entity'


export class UserProfile {
  id: number ;
user?: User ;
userId: number ;
firstName: string  | null;
lastName: string  | null;
avatarImg: string  | null;
coverImg: string  | null;
photos: Buffer ;
videos: Buffer ;
followers: number ;
following: number ;
subscribers: number ;
supporters: number ;
posts: number ;
comments: number ;
likes: number ;
donations: number ;
connections?: UserConnect[] ;
blog: boolean ;
vendor: boolean ;
creator: boolean ;
public_profile: boolean ;
}
