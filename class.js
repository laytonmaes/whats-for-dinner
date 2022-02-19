class Meal {
  constructor(sideDish, mainDish, dessertDish){
    this.id = Date.now();
    this.side = sideDish;
    this.main = mainDish;
    this.dessert = dessertDish;
  }
}
