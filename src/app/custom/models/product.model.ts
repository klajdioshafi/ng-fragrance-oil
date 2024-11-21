import { Category } from "./category.model";
import { Description } from "./description.model";
import { Info } from "./info.model";
import { Stock } from "./stock.model";

export interface Product {
    prodId: string;
    prodName: string;
    prodNameDashed: string;
    prodCategory: Category;
    isOutOfStock: boolean;
    prodStock: Stock;
    prodDescription: string;
}