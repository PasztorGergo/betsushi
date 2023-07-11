export interface Product {
  id: string;
  price: number;
  name: string;
  amount: number;
  img: string;
}
export type Category =
  | "makis"
  | "nigiri"
  | "drinks"
  | "starters"
  | "soups"
  | "special";
export interface Meals {
  id: string;
  price: number;
  name: string;
  img: string;
  type: Category;
}
