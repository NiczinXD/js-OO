import User from './User';
import Docente from './Docente';
import Admin from './Admin';

const novoUser = new Admin('Juliana', 'j@j', '2024-01-01');
console.log(novoUser.exibirInfos());
novoUser.nome = "";
console.log(novoUser.nome)
// console.log(novoUser.exibirInfos());

// novoUser = 'Marcia';
// console.log(novoUser.exibirInfos());
// console.log(novoUser);