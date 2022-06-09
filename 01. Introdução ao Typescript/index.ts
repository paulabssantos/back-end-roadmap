const first_input = document.getElementById("first_num") as HTMLInputElement
const second_input = document.getElementById("second_num") as HTMLInputElement
const button = document.getElementById("button")!

function sum(a: number, b: number){
    return a + b;
}

button.addEventListener("click",()=> {
    console.log(sum(Number(first_input.value), Number(second_input.value)))
})