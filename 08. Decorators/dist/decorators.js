"use strict";
// Função iniciada com um @ que recebe alguns parametros por padrao baseado no tipo de decorator que 
//está sendo trabalhado, pode ter parametros e que pode ser anexada em uma classe, 
//propriedade, metodo , parametro ou acessor. 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Class decorator
function log(target) {
    target.idade = 10;
    return console.log(target.idade);
}
let Foo = class Foo {
    constructor(idade) {
        this.idade = idade;
    }
};
Foo = __decorate([
    log
], Foo);
//Factory (class decorator)
function logger(text) {
    return (target) => {
        console.log(`${text} - ${target}`);
    };
}
let Foo2 = class Foo2 {
};
Foo2 = __decorate([
    logger("awesome")
], Foo2);
//Class decorator
function setAPIVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
let API = class API {
};
API = __decorate([
    setAPIVersion("1.0.0")
], API);
console.log(new API());
//Property decorator
function minLength(length) {
    return (target, key) => {
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value.length < length) {
                console.log(`Erro: o título tem que ter menor que ${length}`);
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
__decorate([
    minLength(5)
], Movie.prototype, "title", void 0);
const movie = new Movie("Interestelar");
console.log(movie.title);
//Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Greeter {
    constructor(g) {
        this.greeting = g;
    }
    greet() {
        console.log(`Hello! ${this.greeting}`);
    }
}
__decorate([
    delay(1000)
], Greeter.prototype, "greet", null);
const pessoa = new Greeter("Seja bem-vindo");
pessoa.greet();
