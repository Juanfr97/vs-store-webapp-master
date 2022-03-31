import { Category } from "./Category";

export interface Product {
  id?:number;
  name?: string;
  price?: number;
  description?: string;
  categoryId?:number;
  image?: string;
  count?:number;
  productCategory?:Category;
}
