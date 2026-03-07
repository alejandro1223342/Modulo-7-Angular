import { BranchStock } from "./BranchStock";

export class Product {
    id!: string;
    name!: string;
    category!: string;
    stocks!: BranchStock[];
}
