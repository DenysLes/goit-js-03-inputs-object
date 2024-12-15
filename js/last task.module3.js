// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let {name} of this.potions) {

//       if (name === newPotion.name) {
//          return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }
//         this.potions.push(newPotion)
//   },
//   removePotion(potionName) {
// for (let i = 0; i < this.potions.length; i++) {
//   // console.log(this.potions[i].name)
//   const name = this.potions[i].name;
//       if (name === potionName ) {
//      this.potions.splice(i,1)
//         return
//  }
// }
// return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
// for (let i = 0; i < this.potions.length; i++) {
//   const name = this.potions[i].name;
//   const indexName = this.potions.indexOf(name)
//   const index = this.potions.indexOf(oldName)
//   console.log(`indexName : ${indexName}`)
// //   console.log(`index : ${index}`)
//   console.log(`name : ${name}`)
// //     console.log(`oldName : ${oldName}`)
// //   console.log(`newName : ${newName}`)
// //   console.log(`i : ${i}`)
// //   console.log(` `)
//       if (name === oldName) {
//         this.potions.splice(i, 1, newName)
// return
//   }
//       }
//   },
//   // Change code above this line
// };

// console.log(
// atTheOldToad.getPotions(),
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
// atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
//   atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
//   atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
//   atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
//   atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
// atTheOldToad.removePotion("Dragon breath"),
// atTheOldToad.removePotion("Speed potion"),

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),//[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")//[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]
// );


// "task 2"

class StringBuilder{
constructor(initialValue)  {
  this.value = initialValue;
}
  getValue(){
    return this.value
  }
  padStart(str) {
    if (str !== this.value) {
      return this.value = `${"^"}${this.value}`;
    }
  }
  padEnd(str) {
    if (str !== this.value) {
      return this.value = `${this.value}${"^"}`;
    }
  }
    padBoth(str) {
for (let items of this.value) {
  console.log(items);
  if (items !== this.value) {
    return this.value = `${"="}${this.value}${"="}`;
    }
    }
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="