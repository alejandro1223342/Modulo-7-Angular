import { Category } from "./Category";

export class Product {
    id!: string;
    name!: string;
    price!: number;
    description!: string;
    category!: Category;
}