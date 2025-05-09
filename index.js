import User from './User';
import Docente from './Docente';
import Admin from './Admin';

const novoUser = new User('Juliana', 'j@j', '2024-01-01');
console.log(novoUser.exibirInfos());

novoUser.nome = "Juliana";
console.log(novoUser.nome);

const dadosFicticios = User.exibirInfosGenericas("Cassio", "c@c")

// const novoAdmin = new Admin('Rodrigo', 'r@r', '2024-01-01');
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente('Marcia', 'm@m', '2024-01-01');
// console.log(novaDocente.exibirInfos());