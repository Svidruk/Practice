import { CategoryData } from './CategoryData';
import { ProductData } from './ProductData';

export interface HomeData {
  products: ProductData[];
  categories: CategoryData[];
}
