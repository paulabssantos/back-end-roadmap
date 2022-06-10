// S -> State
//T -> Type
//K -> Key
//V -> Value
//E -> Element

function useState <S extends number | string>(){
    let state: S

    function getState(){
        return state
    }
   
    function setState(newState: S){
        state = newState
    }   

    return {getState, setState}
}

const newState = useState()

newState.setState("foo") //no momento que foi definido que é uma string, não é possível submeter valor de tipo diferente
console.log(newState.getState())

newState.setState(1) //erro, pois string já foi definido na linha 23
console.log(newState.getState())
