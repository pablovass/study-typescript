(() => {

  const login1 = (email: string, password: string) => {
    console.log(email, password);

  }
  const login = (data:{email: string, password: string}) => {
    console.log(data.email, data.password);

  }
  login1('pablo@gmail.com', '122');
  login({ email:'pablo@gmail.com',password: '122'});

  type Sizes = 'S'|'M'|'L'|'XL';
  const product:any[]=[];
  // objeto complejo
  const addProduct =(data:{
    title:string,
    createdAt: Date,
    stock:number,
    size?:Sizes

  })=>{
product.push(data);
  }
  addProduct({title:'prod1',createdAt:new Date(1992,1,1),stock:21});
  console.log(product);
})();

