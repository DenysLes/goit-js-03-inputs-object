const container = document.querySelector(".js-content");
console.log(container);

let markup = "";

for (let i = 0; i < 9; i += 1) {
    markup += `<div class= "item"></div>`;
}
console.log(markup);
container.innerHTML = markup;