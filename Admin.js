import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, qtdVagas) {
        return `Curso de ${nomeDoCurso} criado com ${qtdVagas} vagas`;
    }

    // exibirInfos() {
    //     const infos = super.exibirInfos();
    //     return `admin - ${infos}`;
    // }
}

const novoAdmin = new Admin("Rodrigo", "r@r", "2024-01-01");
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.exibeNome());