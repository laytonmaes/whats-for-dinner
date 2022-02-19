
var buttonLetsCook = document.querySelector("#lets-cook")

var sectionDisplayMeal = document.querySelector(".meal-display")

var checkboxSide = document.querySelector("#dish1")
var checkboxMain = document.querySelector("#dish2")
var checkboxDessert = document.querySelector("#dish3")

var imgSvg = document.querySelector(".svg-img")

var currentMeal

buttonLetsCook.addEventListener("click", function() {
  imgSvg.classList += " fade-out-image"
  setTimeout(randomizeSelectedDish, 250)
});

checkboxSide.addEventListener("click", function(){
  selectOnlyThis(checkboxSide)
})
checkboxMain.addEventListener("click", function(){
  selectOnlyThis(checkboxMain)
} )
checkboxDessert.addEventListener("click", function(){
  selectOnlyThis(checkboxDessert)
})

// function randomizeMeal(){
//   currentMeal = new Meal( sideDishes[randomizeIndex(sideDishes)],
//   mainDishes[randomizeIndex(mainDishes)],
//   dessertDishes[randomizeIndex(dessertDishes)]
// )
//
// }
function selectOnlyThis(dish){
  for(var i = 1; i <= 3; i++) {
    document.querySelector(`#${"dish" + i}`).checked = false;
  }
  dish.checked = true;
}

function randomizeSelectedDish(){
  if(checkboxSide.checked){
    var currentMeal = sideDishes[randomizeIndex(sideDishes)]
  } else if(checkboxMain.checked){
    var currentMeal = mainDishes[randomizeIndex(mainDishes)]
  } else if(checkboxDessert.checked){
    var currentMeal = dessertDishes[randomizeIndex(dessertDishes)]
  } else {
    return
  }

  sectionDisplayMeal.innerHTML = `<h2 class="fade-in-text">${currentMeal}</h2>`
}

function displayMeal() {
  sectionDisplayMeal.innerHTML = `<h2>${currentMeal}</h2>`
  console.log(checkboxSide.checked)
}

function randomizeIndex(array){
  return Math.floor(Math.random() * array.length)
}
