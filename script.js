//Card Properties
shapes = ['square', 'circle', 'semiCircle']
colors = ['Green', 'Blue', 'Purple']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outline']

//NOT CURRENTLY USING. CAN DELETE IF NOT USED BY END OF CREATION.

//Grid Spaces Variables
// let gridSpace0 = document.getElementById('c0')
// let gridSpace1 = document.getElementById('c1')
// let gridSpace2 = document.getElementById('c2')
// let gridSpace3 = document.getElementById('c3')
// let gridSpace4 = document.getElementById('c4')
// let gridSpace5 = document.getElementById('c5')
// let gridSpace6 = document.getElementById('c6')
// let gridSpace7 = document.getElementById('c7')
// let gridSpace8 = document.getElementById('c8')
// let gridSpace9 = document.getElementById('c9')
// let gridSpace10 = document.getElementById('c10')
// let gridSpace11 = document.getElementById('c11')

//GLOBAL DOM VARIABLES
let checkSetJS = document.querySelector('.checkSet')
let reShuffleDeck = document.querySelector('.reShuffle')
let getCardJS = document.querySelector('.getCard')
let gameGridJS = document.querySelector('.gameGrid')
let inAppUpdate = document.querySelector('.inAppUpdate')
//----------------------------
//GLOBAL ARRAYS
let deck = []
//--------------------

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
  return addCard
}
//----------------------------

//GridSpace Array
gridSpace = []
for (let i = 0; i < 12; i++) {
  gridSpace.push(document.getElementById(`c${i}`))
  const topCard = addCardToGrid()
  addProperties(i, topCard)
}
console.log(gridSpace)
console.log(deck)

//Set the properties of a newly gotten card to a space on the grid
function addProperties(location, topCard) {
  if (topCard.number === 'one') {
    let cardNumber1 = document.createElement('div')
    cardNumber1.className += 'blankShape '
    cardNumber1.className += topCard.shape + ' '
    cardNumber1.className += topCard.shade
    cardNumber1.className += topCard.color
    gridSpace[location].appendChild(cardNumber1)
  } else if (topCard.number === 'two') {
    let cardNumber1 = document.createElement('div')
    cardNumber1.className += 'blankShape '
    cardNumber1.className += topCard.shape + ' '
    cardNumber1.className += topCard.shade
    cardNumber1.className += topCard.color
    gridSpace[location].appendChild(cardNumber1)
    let cardNumber2 = document.createElement('div')
    cardNumber2.className += 'blankShape '
    cardNumber2.className += topCard.shape + ' '
    cardNumber2.className += topCard.shade
    cardNumber2.className += topCard.color
    gridSpace[location].appendChild(cardNumber2)
  } else {
    let cardNumber1 = document.createElement('div')
    cardNumber1.className += 'blankShape '
    cardNumber1.className += topCard.shape + ' '
    cardNumber1.className += topCard.shade
    cardNumber1.className += topCard.color
    gridSpace[location].appendChild(cardNumber1)
    let cardNumber2 = document.createElement('div')
    cardNumber2.className += 'blankShape '
    cardNumber2.className += topCard.shape + ' '
    cardNumber2.className += topCard.shade
    cardNumber2.className += topCard.color
    gridSpace[location].appendChild(cardNumber2)
    let cardNumber3 = document.createElement('div')
    cardNumber3.className += 'blankShape '
    cardNumber3.className += topCard.shape + ' '
    cardNumber3.className += topCard.shade
    cardNumber3.className += topCard.color
    gridSpace[location].appendChild(cardNumber3)
  }
}

//Set Verification - ALL Must be TURNED true for a set to occur
let numberVerified = false
let shapeVerified = false
let shadeVerified = false
let colorVerified = false

function activateComparison() {
  checkForSet()
  if (
    numberVerified === true &&
    shapeVerified === true &&
    shadeVerified === true &&
    colorVerified === true
  ) {
    resetFoundSet()
    inAppUpdate.innerText = 'You got a SET!'
  } else {
    resetFoundSet()
    inAppUpdate.innerText = 'That is not a SET, Try Again!'
  }
}

function resetFoundSet() {
  currentChoice[0].style.borderColor = 'black'
  currentChoice[1].style.borderColor = 'black'
  currentChoice[2].style.borderColor = 'black'
  numberVerified = false
  shapeVerified = false
  shadeVerified = false
  colorVerified = false
  checkSetJS.style.display = 'none'
  checkSetJS.removeEventListener('click', activateComparison)
  currentChoice = []
  inAppUpdate.innerText = ''
}

//Compare Cards to One Another To See if Set Found for Use in selectCard() Function
function checkForSet() {
  //Shape verify
  if (
    (currentChoice[0].childNodes[0].classList[1] ===
      currentChoice[1].childNodes[0].classList[1] &&
      currentChoice[1].childNodes[0].classList[1] ===
        currentChoice[2].childNodes[0].classList[1]) ||
    (currentChoice[0].childNodes[0].classList[1] !==
      currentChoice[1].childNodes[0].classList[1] &&
      currentChoice[1].childNodes[0].classList[1] !==
        currentChoice[2].childNodes[0].classList[1] &&
      currentChoice[0].childNodes[0].classList[1] !==
        currentChoice[2].childNodes[0].classList[1])
  ) {
    console.log('shapeVerified will be set to True')
    shapeVerified = true
  } else {
    console.log('shapeVerify = False!')
  }
  //Number Verify
  if (
    (currentChoice[0].childElementCount ===
      currentChoice[1].childElementCount &&
      currentChoice[1].childElementCount ===
        currentChoice[2].childElementCount) ||
    (currentChoice[0].childElementCount !==
      currentChoice[1].childElementCount &&
      currentChoice[1].childElementCount !==
        currentChoice[2].childElementCount &&
      currentChoice[0].childElementCount !== currentChoice[2].childElementCount)
  ) {
    console.log('numberVerify will be set to True')
    numberVerified = true
  } else {
    console.log('numberVerify = False!')
  }
  //Color Verify
  if (
    (window.getComputedStyle(currentChoice[0].childNodes[0]).borderColor ===
      window.getComputedStyle(currentChoice[1].childNodes[0]).borderColor &&
      window.getComputedStyle(currentChoice[1].childNodes[0]).borderColor ===
        window.getComputedStyle(currentChoice[2].childNodes[0]).borderColor) ||
    (window.getComputedStyle(currentChoice[0].childNodes[0]).borderColor !==
      window.getComputedStyle(currentChoice[1].childNodes[0]).borderColor &&
      window.getComputedStyle(currentChoice[1].childNodes[0]).borderColor !==
        window.getComputedStyle(currentChoice[2].childNodes[0]).borderColor &&
      window.getComputedStyle(currentChoice[0].childNodes[0]).borderColor !==
        window.getComputedStyle(currentChoice[2].childNodes[0]).borderColor)
  ) {
    console.log('colorVerify will be set to True')
    colorVerified = true
  } else {
    console.log('colorVerify = False!')
  }
  //Shade Verify
  if (
    (window.getComputedStyle(currentChoice[0].childNodes[0]).background ===
      window.getComputedStyle(currentChoice[1].childNodes[0]).background &&
      window.getComputedStyle(currentChoice[1].childNodes[0]).background ===
        window.getComputedStyle(currentChoice[2].childNodes[0]).background) ||
    (window.getComputedStyle(currentChoice[0].childNodes[0]).background !==
      window.getComputedStyle(currentChoice[1].childNodes[0]).background &&
      window.getComputedStyle(currentChoice[1].childNodes[0]).background !==
        window.getComputedStyle(currentChoice[2].childNodes[0]).background &&
      window.getComputedStyle(currentChoice[0].childNodes[0]).background !==
        window.getComputedStyle(currentChoice[2].childNodes[0]).background)
  ) {
    console.log('shadeVerify will be set to True')
    shadeVerified = true
  } else {
    console.log('shadeVerify = False!')
  }
}

//Empty Array for selection when user is choosing SET
let currentChoice = []
//Click GridSpaces Event Listener Callback Function
function selectCard(e) {
  inAppUpdate.innerText = ''
  if (currentChoice.length < 3) {
    let choice = e.currentTarget
    choice.style.borderColor = 'yellow'
    currentChoice.push(choice)
    console.log(currentChoice)
  }
  if (currentChoice.length === 3) {
    checkSetJS.style.display = 'flex'
    checkSetJS.addEventListener('click', activateComparison)
  }
}

//EVENT LISTENERS

//Doesn't work yet
reShuffleDeck.addEventListener('click', shuffleDeck)

//Event Listener for loop for all gridSpace Locations
//Click GridSpaces
for (let i = 0; i < 12; i++) {
  gridSpace[i].addEventListener('click', selectCard)
}
//Event Listener for Check Selected Cards for Set
//Click Check Button
