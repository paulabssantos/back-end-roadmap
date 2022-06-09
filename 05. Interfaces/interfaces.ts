interface Game {
    title: string
    description: string
    readonly genre: string //Apenas leitura
    platform?: string[]
    getSimilars?: (title: string) => void
}

const spider_man: Game = {
    title: "Spider-Man",
    description: "Game of the year (2018)",
    genre: "Action",
    platform: ["PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Spider-Man Miles Morales, Avengers, Guardians of the Galaxy `)
    }
}

spider_man.getSimilars(spider_man.title)
console.log(spider_man.description)

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const miles_morales: DLC = {
    title: "Sipder-man Miles Morales",
    description: "You play as Miles Morales",
    genre: "Action",
    platform: ["PS4"],
    originalGame: spider_man,
    newContent: ["Miles Morales now is responsible for NY City and the world"],
}

class CreateGame implements Game{
    title: string
    description: string
    genre: string

    constructor(t: string, d: string, g:string){
        this.title = t,
        this.description = d,
        this.genre = g
    }
}