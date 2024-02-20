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


function login1(data: (email: string, password: string)) { console.log(data.email, data.password); }


function login(data: {email: string, password: string}) { console.log(data.email, data.password); }
