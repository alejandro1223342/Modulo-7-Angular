import { Company } from "./Company";
import { Product } from "./Product";

export interface InventoryData {
    company: Company;
    products: Product[];
}
