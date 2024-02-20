(() => {


  const login1 = (email: string, password: string) => {
    console.log(email, password);

  }
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);

  }
  login1('pablo@gmail.com', '122');
  login({ email: 'pablo@gmail.com', password: '122' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }
  const product: Product[] = [];
  // objeto complejo
  const addProduct = (data: Product) => {
    product.push(data);
  }
  addProduct({ title: 'prod1', createdAt: new Date(1992, 1, 1), stock: 21 });
  console.log(product);

  product.push({ title: 'prod1', createdAt: new Date(1992, 1, 1), stock: 21 }); // se debe mandar el objetos completo salvo any que son obcionales
})();

