import { Product } from "./product.model";

export const product: Product[] = [];

 export  const createProduct = (data: Product) => {
    product.push(data);
  }
export const calcularStock =():number =>{
  let total=0;
  product.forEach((item)=>{
    total += item.stock;
  })
  return total;
}
