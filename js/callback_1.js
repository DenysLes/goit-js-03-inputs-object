/*Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.*/
function makePizza(result) {   
  return "Your pizza is being prepared, please wait."
}
    // Change code below this line
    const result = makePizza("Your pizza is being prepared, please wait.");
    const pointer = makePizza;

makePizza("Your pizza is being prepared, please wait.")
console.log(pointer);
