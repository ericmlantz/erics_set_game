//Card Properties
shapes = ['square', 'circle', 'semiCircle']
colors = ['Green', 'Blue', 'Purple']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outline']

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
let reShuffleDeck = document.querySelector('.reShuffle')
let getCardJS = document.querySelector('.getCard')
//Game Grid Variable
let gameGridJS = document.querySelector('.gameGrid')
let addCard = []

//Deck Variables
let deck = []
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
// for (let numPlayers = 0; numPlayers < 3; numPlayers++) {
//   let player = new Player()
// }
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
//----------------------------

// Test of creation of a shape inside one of the grid cards with added properties for that specific card's shapes
// let cardProperty = document.createElement('div')
// gridSpace1.appendChild(cardProperty)
// cardProperty.className = 'blankShape greenStriped semiCircle'
// let cardPropertyTwo = document.createElement('div')
// gridSpace1.appendChild(cardPropertyTwo)
// cardPropertyTwo.className = 'blankShape blueStriped square'
// let cardPropertyThree = document.createElement('div')
// gridSpace1.appendChild(cardPropertyThree)
// cardPropertyThree.className = 'blankShape purpleStriped circle'
//----------------------------

// Attempt at making number of elements change on a grid item's card

//----------------------------

//Shuffle Function that mixes up the cards
function shuffleDeck(deck) {
  let newIndex = 0
  let temp = null

  for (let index = deck.length - 1; index > 0; index -= 1) {
    newIndex = Math.floor(Math.random() * (index + 1))
    temp = deck[index]
    deck[index] = deck[newIndex]
    deck[newIndex] = temp
  }
}
shuffleDeck(deck)
//----------------------------

//Function to get 'top' card in the deck
function addCardToGrid() {
  addCard = deck.shift()
  addProperties()
}
//----------------------------

//Grid Space Array

//Set the properties of a newly gotten card to a space on the grid
function addProperties() {
  const gridSpace = [
    gridSpace0,
    gridSpace1,
    gridSpace2,
    gridSpace3,
    gridSpace4,
    gridSpace5,
    gridSpace6,
    gridSpace7,
    gridSpace8,
    gridSpace9,
    gridSpace10,
    gridSpace11
  ]

  console.log(gridSpace[3])
  for (let i = 0; i < 12; i++) {
    if (addCard.number === 'one') {
      let cardNumber1 = document.createElement('div')
      cardNumber1.className += 'blankShape '
      cardNumber1.className += addCard.shape + ' '
      cardNumber1.className += addCard.shade
      cardNumber1.className += addCard.color
      gridSpace[i].appendChild(CardNumber1)
    } else if (addCard.number === 'two') {
      let cardNumber1 = document.createElement('div')
      cardNumber1.className += 'blankShape '
      cardNumber1.className += addCard.shape + ' '
      cardNumber1.className += addCard.shade
      cardNumber1.className += addCard.color
      gridSpace[i].appendChild(cardNumber1)
      let cardNumber2 = document.createElement('div')
      cardNumber2.className += 'blankShape '
      cardNumber2.className += addCard.shape + ' '
      cardNumber2.className += addCard.shade
      cardNumber2.className += addCard.color
      gridSpace[i].appendChild(cardNumber2)
    } else {
      let cardNumber1 = document.createElement('div')
      cardNumber1.className += 'blankShape '
      cardNumber1.className += addCard.shape + ' '
      cardNumber1.className += addCard.shade
      cardNumber1.className += addCard.color
      gridSpace[i].appendChild(cardNumber1)
      let cardNumber2 = document.createElement('div')
      cardNumber2.className += 'blankShape '
      cardNumber2.className += addCard.shape + ' '
      cardNumber2.className += addCard.shade
      cardNumber2.className += addCard.color
      gridSpace[i].appendChild(cardNumber2)
      let cardNumber3 = document.createElement('div')
      cardNumber3.className += 'blankShape '
      cardNumber3.className += addCard.shape + ' '
      cardNumber3.className += addCard.shade
      cardNumber3.className += addCard.color
      gridSpace[i].appendChild(cardNumber3)
    }
  }
}

//EVENT LISTENERS
reShuffleDeck.addEventListener('click', shuffleDeck)
getCardJS.addEventListener('click', addCardToGrid)
/* Game Process
1. Have players insert names
2. startGame Function run when start game BUTTON is pressed. 
3. New player objects created with names and wonCounts of 0 to start.
4.Create each card
5. Create deck object holding every card
6. Shuffle cards using ShuffleDeck function.
8. Switch the page to the gameGrid page.
7. Add 12 new cards to the gameGrid
*/
