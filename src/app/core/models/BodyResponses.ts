import { Auth } from "./Auth";
import { Product } from "./Product";
import { Sell } from "./Sell";
import { User } from "./User";

export interface ResponseProduct {
    total: number;
    products: Product[];
  }


  export interface ResponseUser {
    total: number;
    users: User[];
  }

  export interface ResponseSell {
    total: number;
    page: number;
    limit: number;
    sells: Sell[];
  }

 export interface ResponseAuth{
    userId:string,
    role:string,
    isLogged:boolean
 } 



  