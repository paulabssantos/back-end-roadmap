// boolean (true/false)

let isOpen: boolean
isOpen = true

//string('foo',"foo",`foo`)
let message: string
message = `foo ${isOpen}`

//number (int,float, hex, binary)
let total: number
total = 0xff0

//array
let items: string[]
items = ["foo","bar"]

let values: Array <number>
values = [1,2,3]


//tuple
let title: [number, string, string]
title = [1,"dois","tres"]

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

//any
let coisa: any
coisa = 2

//void(vazio)
function logger(){
    console.log("foo")
 }

// null/undefined
type bla = string | undefined //pode ser string ou indefinido

//never (nunca retorna)
function error(): never{
    throw new Error("Erro")
}

//object
let cart: object
cart = {
    key: "fi"
}

//type inference
let texto = "mensagem"

window.addEventListener("click",(e) =>{
    e.target
}
)

