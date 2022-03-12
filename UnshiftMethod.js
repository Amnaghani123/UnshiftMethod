/* Unshift Method is use to add a desire elements to the top of array*/

//Initial Array
const array = ["Apple", "Mango", "Orange"]

//Adding New element
const newFirstElement = "kiwi"

//FruitArray
const Fruits = [newFirstElement].concat(array) // ["Apple", "Mango", "Orange","kiwi"]

console.log(Fruits);