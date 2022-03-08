//Card Properties
shapes = ['square', 'circle', 'plus']
colors = ['green', 'blue', 'purple']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outlined']

//Global DOM Variables
let gridSpace1 = document.getElementById('c1')
let gameGridJS = document.querySelector('.gameGrid')

//Card Class that has the blueprint for what each card must have: shape, color, number, and shading
class Card {
  constructor(shape, color, number, shade) {
    this.shape = shape
    this.color = color
    this.number = number
    this.shade = shade
  }
}

//Deck Array that uses a for loop to cycle through and create a deck of 81 unique cards and turns them into new card objects.
const deck = []
for (let shapesIndex = 0; shapesIndex < shapes.length; shapesIndex++) {
  for (let colorsIndex = 0; colorsIndex < colors.length; colorsIndex++) {
    for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
      for (
        let shadingIndex = 0;
        shadingIndex < shading.length;
        shadingIndex++
      ) {
        let card = new Card(
          shapes[shapesIndex],
          colors[colorsIndex],
          numbers[numbersIndex],
          shading[shadingIndex]
        )
        deck.push(card)
      }
    }
  }
}
console.log(deck)

let cardProperty = document.createElement('div')
gridSpace1.appendChild(cardProperty)
cardProperty.className = 'blankShape outline square'
