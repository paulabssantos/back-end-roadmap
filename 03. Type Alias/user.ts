type AccountInfo = {
    id: number
    name: string
    email?: string // a ? indica que o campo email nao é obrigatorio. Mesmo que sting | undefined
}

const account: AccountInfo = {
    id: 123,
    name: "Paula Santos",
    email: "paula123@gmail.com",
}   

type CharInfo = {
    nickname: string
    level: number
}

const char: CharInfo = {
    nickname: "paula.santos",
    level: 100,
}

//intersection

type PlayerInfo = AccountInfo & CharInfo;

const player:PlayerInfo = {
    id: 1,
    name: "Paula",
    email: "paula123@gmail.com",
    nickname: "paula.santos",
    level: 100,
}