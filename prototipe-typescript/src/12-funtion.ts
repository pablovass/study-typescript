(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';

  function createProductToJson(title: string,createdAt:Date,stock:number,sizes:Sizes){
return {title,createdAt,stock,sizes}
  }
  //le paso parametros a la funcion
  const producto1=createProductToJson('P1',new Date(),12,'L');

  // estp es una arrow funsion
  const createProductToJsonV2=(title: string,createdAt:Date,stock:number,sizes:Sizes|undefined)=>{
    return {title,createdAt,stock,sizes}
      }
      const producto2=createProductToJsonV2('P1',new Date(),12,undefined);

      
      const createProductToJsonV3=(title: string,createdAt:Date,stock:number,sizes?:Sizes)=>{
        return {title,createdAt,stock,sizes}
          }
          const producto3=createProductToJsonV3('P1',new Date(),12);
})();
