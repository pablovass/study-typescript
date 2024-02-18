// se recomienda no ser utilizado ya que es una buena practica ser 100 explicito
(()=>{

  let myDynamycVar:any;
  myDynamycVar =100;
  myDynamycVar= null;
  myDynamycVar={};
  myDynamycVar='';


  const rta=(myDynamycVar as string).toLowerCase();
  myDynamycVar=2212;
  const rta2=(<number>myDynamycVar).toFixed();
})();
