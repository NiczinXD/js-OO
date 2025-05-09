export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    get nascimento(){   
        return this.#nascimento;
    }   

    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    }

    set nome(novoNome){ 
        if (novoNome === "") {
            throw new Error("formato do nome inválido");
        }
        this.#nome = novoNome;
    }

    // exibirInfos() {
    //     return `${this.nome}, ${this.email}`;
    // }

    exibirInfos() {
        if (this.role === "estudante") {
            return `${this.nome}, ${this.email}, ${this.nascimento}`;
        }

        if (this.role === "admin") {
            return `${this.nome}, ${this.role}`;
        }

        if (this.role === "docente") {
            return `${this.nome}, ${this.role}`;
        }

    }

    static exibirInfosGenericas(nome, email){
        return { nome, email };
    }
}

const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
console.log(novoUser);
console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser));