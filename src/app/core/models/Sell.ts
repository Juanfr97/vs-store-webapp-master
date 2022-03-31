import { Product } from "./Product";
import { User } from "./User";

export interface Sell  {
    key?:string;
    products?:Product[];
    user?:User;
    total?:number;
    createdAt?:Date
}