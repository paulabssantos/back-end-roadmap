var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var work = {
    title: "Estudar typescript",
    description: "Estudar typescript para construção de API",
    completed: false
};
console.log(work);
function UpdateToDo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate); // separa as propriedades do objeto ToDo uma a uma
}
var second_work = UpdateToDo(work, { completed: true });
console.log(second_work);
