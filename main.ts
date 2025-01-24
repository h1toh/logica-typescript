
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
// functions

if(pessoa.nome=="lucas"){
  falar(pessoa.nome)
} else {
  falar("estranho")
}

// condicoes

arr.forEach((e)=>{
  console.log(e)
})

// loop
