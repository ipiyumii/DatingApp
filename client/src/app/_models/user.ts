export interface User { //describe the shape of the user object
  username: string;
  knownAs: string;
  gender: string;
  token: string;
  photoUrl?: string;
}
