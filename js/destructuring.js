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
  addPotion(potion) {
    for (const potion of this.potions) {
      console.log(potion);
    
      if (this.potions.includes(potion)) {
        return `Error! Potion ${potion} is already in your inventory!`;
      }
      this.potions.push(potion);
    }
  },
  removePotion(potion) {
    const potionIndex = this.potions.indexOf(potion);
 
    if (potionIndex === -1) {
      return `Potion ${potion} is not in inventory!`;
    }
  
    this.potions.splice(potionIndex, 1);  
    
  },

  updatePotionName(potion) {
    const potionIndex = this.potions.indexOf(potion); 

    if (potionIndex === -1) {
      return `Potion ${potion} is not in inventory!`;
    }
      this.potions.splice(potionIndex, 1, potion);
    },
  // Change code above this line
};
console.log(
atTheOldToad.getPotions(),
  atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
  atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
  atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
  atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
  atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
  atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
 atTheOldToad.removePotion("Dragon breath"),
  atTheOldToad.removePotion("Speed potion"),
atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"),
);