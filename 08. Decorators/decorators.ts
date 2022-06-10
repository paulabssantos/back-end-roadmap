// Função iniciada com um @ que recebe alguns parametros por padrao baseado no tipo de decorator que 
//está sendo trabalhado, pode ter parametros e que pode ser anexada em uma classe, 
//propriedade, metodo , parametro ou acessor. 


//Class decorator
function log(target:any) {
    target.idade = 10
    return console.log(target.idade)
}

@log
class Foo{
    public idade: number

    constructor(idade: number){
        this.idade = idade
    }
}

//Factory (class decorator)
function logger(text: string){
    return (target: any) => {
        console.log(`${text} - ${target}`)
    }
}

@logger("awesome")
class Foo2{

}

//Class decorator
function setAPIVersion(apiVersion: string){
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion("1.0.0")
class API {

}

console.log(new API())

//Property decorator

function minLength(length: number){
    return(target: any, key: string | symbol) => {
        let valor = target[key]

        const getter = () => valor
        const setter = (value: string) => {
            if(value.length < length){
                console.log(`Erro: o título tem que ter menor que ${length}`)
            }
            else{
                valor = value
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
    
        })
    }
}
class Movie {

    @minLength(5)
    title: string

    constructor(t: string){
        this.title = t
    }
}

const movie = new Movie("Interestelar")
console.log(movie.title)

//Method decorator

function delay(ms: number){
    return(target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function(...args:any) {
            console.log(`Esperando ${ms}...`)
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms); 
            
            return descriptor
          }
    }
}

class Greeter {
    greeting: string

    constructor(g: string){
        this.greeting = g
    }

    @delay(1000)
    greet(){
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoa = new Greeter("Seja bem-vindo")
pessoa.greet()