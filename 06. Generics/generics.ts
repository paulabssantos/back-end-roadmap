// S -> State
//T -> Type
//K -> Key
//V -> Value
//E -> Element

function useState <S>(){
    let state: S

    function getState(){
        return state
    }
   
    function setState(newState: S){
        state = newState
    }
}