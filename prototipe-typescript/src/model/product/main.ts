import { createProduct,calcularStock,product } from "./product.service";
createProduct({ name: 'prod1', createdAt: new Date(1992, 1, 1), stock: 21 });

createProduct({ name: 'prod2', createdAt: new Date(1993, 1, 1), stock: 21 });

console.log(product);
const total=calcularStock();
console.log(total);

