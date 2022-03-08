//Card Properties
shapes = ['square', 'circle', 'plus']
colors = ['green', 'blue', 'purple']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outlined']

//GLOBAL DOM VARIABLES

//Grid Spaces Variables
let gridSpace0 = document.getElementById('c0')
let gridSpace1 = document.getElementById('c1')
let gridSpace2 = document.getElementById('c2')
let gridSpace3 = document.getElementById('c3')
let gridSpace4 = document.getElementById('c4')
let gridSpace5 = document.getElementById('c5')
let gridSpace6 = document.getElementById('c6')
let gridSpace7 = document.getElementById('c7')
let gridSpace8 = document.getElementById('c8')
let gridSpace9 = document.getElementById('c9')
let gridSpace10 = document.getElementById('c10')
let gridSpace11 = document.getElementById('c11')

//Game Grid Variable
let gameGridJS = document.querySelector('.gameGrid')

//Deck Variables
const deck = []
//----------------------------

//Player Class
class Player {
  constructor(nameOfPlayer, winCount, keyBinded) {
    this.name = nameOfPlayer
    this.winCount = winCount
    this.keyBinded = keyBinded
  }
}
//----------------------------

//Card Class that has the blueprint for what each card must have: shape, color, number, and shading
class Card {
  constructor(shape, color, number, shade) {
    this.shape = shape
    this.color = color
    this.number = number
    this.shade = shade
  }
}
//----------------------------

//PlayerCreation
for (let numPlayers = 0; numPlayers < 3; numPlayers++) {
  let player = new Player()
}
//----------------------------
//Deck Array that uses a for loop to cycle through and create a deck of 81 unique cards and turns them into new card objects.
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

//Function to add a new card to grid
const addCardToGrid = () => {
  return deck.shift
}
//----------------------------

// Creation of a shape inside one of the grid cards with added properties for that specific card's shapes
let cardProperty = document.createElement('div')
gridSpace1.appendChild(cardProperty)
cardProperty.className = 'blankShape outline square'
//----------------------------

// Attempt at Making Number of elements change on a grid item's card
for (let i = 0; i < deck.length; i++) {
  if (deck[i].number === 'One') {
    let cardNumber = document.createElement('div')
    deck[i].appendChild(cardNumber)
  } else if (deck[i].number === 'Two') {
    let cardNumber = document.createElement('div')
    deck[i].appendChild(cardNumber)
    let cardNumberTwo = document.createElement('div')
    gridSpace1.appendChild(cardNumberTwo)
  }
}
//----------------------------
