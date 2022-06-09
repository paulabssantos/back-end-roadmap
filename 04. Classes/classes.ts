abstract class UserAccount {
    name: string
    age: number
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails(): void{
        console.log(`O jogador ${this.name} tem ${this.age} anos.`)
    }
}

class CharAccount extends UserAccount {
    nickname: string
    level: number

    constructor(name: string, age: number, nickname: string, level: number){
        super(name,age)

        this.nickname = nickname,
        this.level = level

    }
}

const player_one = new CharAccount("Paula",20,"paula.santos",200)
player_one.nickname = "paulabssantos"

console.log(player_one.level)
console.log(player_one)
player_one.logDetails()

