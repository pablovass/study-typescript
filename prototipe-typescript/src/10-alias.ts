(()=>{
// para crear los alias tenemos que crear tipo de objetos que los vamos a llamar types
type UserId =string|number;
let UserId:UserId;

function greeting(UserId:UserId){
  if(typeof UserId === 'string'){
    console.log(`string ${UserId.toLowerCase()}`)
  }
}

//literal types
type Sizes = 'S'|'M'|'L'|'XL';
let shirtSize : Sizes;
shirtSize ='L';
shirtSize ='M';
shirtSize ='S';
shirtSize ='XL';

function greeting2(UserId:UserId, sizes:Sizes){
  if(typeof UserId === 'string'){
    console.log(`string ${UserId.toLowerCase()}`)
  }
}

greeting2(111 , 'L');
greeting2('111' , 'L');

})();
