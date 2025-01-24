"use strict";
let str = "lukas";
let num = 10;
let bln = true;
// variaveis string, number e bool
let arr = ["lukas", 2];
let arr2 = ["lukas"];
arr.push("biba");
console.log(arr);
// arrays
let pessoa = {
    nome: "lucas",
    idade: 18
};
// object
function falar(nome) {
    console.log(`Olá, ${nome}!`);
}
function soma(x = 0, y = 0) {
    return x + y;
}
let res = soma(1, 1);
console.log(res);
function newUser(username, email, pass, cellphone) {
    console.log(username, email, pass, cellphone);
}
newUser("lucas", "lucas@email.com", "senha");
// functions
if (pessoa.nome == "lucas") {
    falar(pessoa.nome);
}
else {
    falar("estranho");
}
// condicoes
arr.forEach((e) => {
    console.log(e);
});
// loop
