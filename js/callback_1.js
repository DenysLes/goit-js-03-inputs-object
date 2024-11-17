/*Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.*/
function makePizza() {
    return "Your pizza is being prepared, please wait.";
}
    // Change code below this line

    const result = "Your pizza is being prepared, please wait.";
    const pointer = makePizza;
    

console.log(makePizza("Your pizza is being prepared, please wait."))
// makePizza("Your pizza is being prepared, please wait.");

