//var _ = requiere('');   esta no soporta tipos

import _ from 'lodash'; // el mismo  editor visual studio code te dice, el comando que tenes que utilizar para crearle tipos a un libreria que no tiene tipos

const data =[
  {
    username:'nico',
    role:'admin'
  },
  {
    username:'valentin',
    role:'seller'
  },
  {
    username:'mariano',
    role:'seller'
  },
  {
    username:'pablo',
    role:'cutomer'
  }
];
const rta= _.groupBy(data,(item)=>item.role);

console.log(rta);

`const rta = 1 + '1';`

