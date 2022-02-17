
var buttonLetsCook = document.querySelector("#lets-cook")
var buttonAddNew = document.querySelector("#add-new")

var currentMeal
buttonLetsCook.addEventListener("click", function(){
  randomizeMeal()
});

buttonAddNew.addEventListener("click", function(){
  event.preventDefault();
  randomizeMeal()
})

function randomizeMeal(){
  currentMeal = new Meal( sideDishes[randomizeIndex(sideDishes)],
  mainDishes[randomizeIndex(mainDishes)],
  dessertDishes[randomizeIndex(dessertDishes)]
)
console.log(currentMeal)
}

function randomizeIndex(array){
  return Math.floor(Math.random() * array.length)
}
