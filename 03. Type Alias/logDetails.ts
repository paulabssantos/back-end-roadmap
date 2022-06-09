// type alias
type Uid = number | undefined | string

function logDetails(uid: Uid, item: string){
    console.log(`O produto ${uid} é ${item}.`)

}

function logInfo(uid: Uid, user: string){
    console.log(`O usuário ${uid} é ${user}`)
}

logDetails(123,"Sabão") 