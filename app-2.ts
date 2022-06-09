type pessoa = {
    nome: string,
    idade: number,
    profissao: profissao
}

enum profissao{
    Pedreiro,
    Atriz
}

let pessoa_1: pessoa = {
    nome: "Helton",
    idade: 30,
    profissao: profissao.Pedreiro
}

let pessoa_2: pessoa = {
    nome: "Laiz",
    idade: 28,
    profissao: profissao.Atriz
}



