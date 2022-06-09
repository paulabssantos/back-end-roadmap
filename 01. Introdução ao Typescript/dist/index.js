"use strict";
const first_input = document.getElementById("first_num");
const second_input = document.getElementById("second_num");
const button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log(sum(Number(first_input.value), Number(second_input.value)));
});
