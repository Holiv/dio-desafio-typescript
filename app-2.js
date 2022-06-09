"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["Pedreiro"] = 0] = "Pedreiro";
    profissao[profissao["Atriz"] = 1] = "Atriz";
})(profissao || (profissao = {}));
let pessoa_1 = {
    nome: "Helton",
    idade: 30,
    profissao: profissao.Pedreiro
};
let pessoa_2 = {
    nome: "Laiz",
    idade: 28,
    profissao: profissao.Atriz
};
