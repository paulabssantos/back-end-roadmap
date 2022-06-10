type ToDo = {
    title: string
    description: string
    completed: boolean
}

// Readonly
const work: Readonly<ToDo> = {
    title: "Estudar typescript",
    description: "Estudar typescript para construção de API",
    completed: false
}

console.log(work)

function UpdateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>) //Deixa opcional os atributos do toDo e garante que as propriedades passadas estejam dentro do objeto ToDo 
{
    return { ...todo, ...fieldsToUpdate} // separa as propriedades do objeto ToDo uma a uma
}

const second_work: ToDo = UpdateToDo(work, {completed: true})

console.log(second_work)

// Pick

//Pega somente as propriedades title e description do objeto ToDo

type PreviewToDo = Pick<ToDo, "title" | "completed">

const third_work: PreviewToDo = {
    title: "Finalizar curso typescript",
    completed: false
}


//Omit (baseado no tipo do objeto, omite o que for informado )

type Second_PreviewToDo = Omit<ToDo, "description">

const fourth_work: Second_PreviewToDo = {
    title: "Aprender sobre type_utilities",
    completed: false
}