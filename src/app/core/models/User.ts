import { Role } from "./Role";

export interface User {
  _id?:string;
  name?: string;
  lastName?: string;
  email?: string;
  city?: string;
  zipCode?:string;
  country?:string;
  street?:string;
  password?: string;
  gender?: string;
  image?: string;
  userRole?:Role;
}
