const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  
  getPotions() {
      return this.potions;
    },
  addPotion(newPotion) {

    for (const { name } of this.potions) {
      if (name === newPotion.name) {
       return `Error! Potion ${name} is already in your inventory!`;
     }
    }

     this.potions.push(newPotion);
    
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const name = this.potions[i].name;
// console.log(name)
      if (name === potionName) {
        this.potions.splice(i, 1); 
        return;
      }
    } 
     return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const name = this.potions[i].name;
     let idx = this.potions.indexOf(name);
  console.log(idx)
      if (name === oldName) {
        this.potions.splice(oldName, 1, newName);
        return
      }
    }
      
  return `Potion ${newName} is not in inventory!`;
    },
  // Change code above this line
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.getPotions());
  // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
  // atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
  // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
// console.log(atTheOldToad.removePotion("Dragon breath"));ц 
// console.log( atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.getPotions());
 console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
 console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// console.log(atTheOldToad.getPotions());
