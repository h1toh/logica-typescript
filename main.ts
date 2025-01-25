
let str: string = "lukas"
let num: number = 10
let bln: boolean = true
// variaveis string, number e bool

let arr: (string|number)[] = ["lukas", 2]
let arr2: ReadonlyArray<string> = ["lukas"]

arr.push("biba")
console.log(arr)
// arrays

let pessoa = {
  nome: "lucas",
  idade: 18
}
// object

function falar(nome:string):void{
  console.log(`Olá, ${nome}!`)
}

function soma(x:number=0, y:number=0):number{
  return x + y
}
let res:number = soma(1,1)
console.log(res)

function newUser(username:string, email:string, pass:string, cellphone?:string):void{
  console.log(username, email, pass, cellphone)
}
newUser("lucas", "lucas@email.com","senha")

const soma = (a: number, b: number): number => {
    return a + b
}
soma(1, 1)

const teste = (txt: string): void => {
    console.log('Hello, world!')
}
teste("opa")

function fsoma(...n: number[]) {
    let i: number = 0
    n.forEach((e) => {
        i += e
    })
    return i
}

console.log(fsoma(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1))
// functions

for (let l of lista) {
    console.log(l)
}

interface info {
    curso: string;
    des?: string;
    inicarCurso?(curso: string):void;
}

interface newInfo extends info {
    aulas: number;
    maxAluno?: number;
}

let info1: newInfo
let info2: newInfo

info1 = { curso: "Typescript", des: "legal", aulas: 200, maxAluno: 50 }
info2 = { curso: "C++", des: "hacker", aulas: 100, maxAluno: 30 }
