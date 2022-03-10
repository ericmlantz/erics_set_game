//Card Properties
shapes = ['square', 'circle', 'semiCircle']
colors = ['Green', 'Blue', 'Purple']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outline']
//----------------------------

//GLOBAL DOM VARIABLES
let checkSetJS = document.querySelector('.checkSet')
let reShuffleDeck = document.querySelector('.reShuffle')
let getCardJS = document.querySelector('.getCard')
let gameGridJS = document.querySelector('.gameGrid')
let inAppUpdate = document.querySelector('.inAppUpdate')
//----------------------------

//GLOBAL ARRAYS
let deck = []
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
alteredDeck = []
//Function to get 'top' card in the deck
function addCardToGrid() {
  addCard = deck.shift()
  alteredDeck.push(addCard)
  return addCard
}
//----------------------------

//GridSpace Array
gridSpace = []
let topCard = 0
function newGrid() {
  for (let i = 0; i < 12; i++) {
    if (i < 10) {
      gridSpace.push(document.getElementById(`c0${i}`))
    } else {
      gridSpace.push(document.getElementById(`c${i}`))
    }
    topCard = addCardToGrid()
    addProperties(i, topCard)
  }
}
newGrid()
console.log(deck)

//Make new grid of cards if Reshuffle Button clicked
function noSetsReshuffle() {
  for (let i = 0; i < 12; i++) {
    gridSpace[i].innerHTML = ''
  }
  newGrid()
  console.log('Reshuffled Deck')
  console.log(deck)
}

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

//After Correct Set, Add 3 New Cards and Remove Old Ones
function addThreeNew() {
  deck.indexOf(currentChoice[0])
  currentChoice[0].innerHTML = ''
  currentChoice[1].innerHTML = ''
  currentChoice[2].innerHTML = ''

  if (currentChoice[0].id[1] === '0') {
    gridSpace.push(document.getElementById(currentChoice[0]))
    topCard1 = addCardToGrid()
    addProperties(currentChoice[0].id[2], topCard1)
  } else {
    gridSpace.push(document.getElementById(currentChoice[0]))
    topCard1 = addCardToGrid()
    addProperties(currentChoice[0].id[1] + currentChoice[0].id[2], topCard1)
  }

  if (currentChoice[1].id[1] === '0') {
    gridSpace.push(document.getElementById(currentChoice[1]))
    topCard2 = addCardToGrid()
    addProperties(currentChoice[1].id[2], topCard2)
  } else {
    gridSpace.push(document.getElementById(currentChoice[1]))
    topCard2 = addCardToGrid()
    addProperties(currentChoice[1].id[1] + currentChoice[1].id[2], topCard2)
  }

  if (currentChoice[2].id[1] === '0') {
    gridSpace.push(document.getElementById(currentChoice[2]))
    topCard3 = addCardToGrid()
    addProperties(currentChoice[2].id[2], topCard3)
  } else {
    gridSpace.push(document.getElementById(currentChoice[2]))
    topCard3 = addCardToGrid()
    addProperties(currentChoice[2].id[1] + currentChoice[2].id[2], topCard3)
  }
  resetFoundSet()
  console.log(deck)
}

//Set Verification - ALL Must be TURNED true for a set to occur
let numberVerified = false
let shapeVerified = false
let shadeVerified = false
let colorVerified = false

function activateComparison() {
  checkForSet()
  if (numberVerified && shapeVerified && shadeVerified && colorVerified) {
    console.log(currentChoice)
    addThreeNew()
    inAppUpdate.innerText = 'You got a SET!'
  } else {
    resetFoundSet()
    inAppUpdate.innerText = 'That is not a SET, Try Again!'
  }
}

function resetFoundSet() {
  currentChoice[0].classList.remove('selected')
  currentChoice[1].classList.remove('selected')
  currentChoice[2].classList.remove('selected')
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
    //console.log('shapeVerified will be set to True')
    shapeVerified = true
  } else {
    //console.log('shapeVerify = False!')
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
    //console.log('numberVerify will be set to True')
    numberVerified = true
  } else {
    //console.log('numberVerify = False!')
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
    //console.log('colorVerify will be set to True')
    colorVerified = true
  } else {
    //console.log('colorVerify = False!')
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
    //console.log('shadeVerify will be set to True')
    shadeVerified = true
  } else {
    //console.log('shadeVerify = False!')
  }
}

//Empty Array for selection when user is choosing SET
let currentChoice = []
//Click GridSpaces Event Listener Callback Function
function selectCard(e) {
  inAppUpdate.innerText = ''
  if (currentChoice.length < 3) {
    let choice = e.currentTarget
    if (currentChoice.includes(choice)) {
      choice.classList.remove('selected')
      let index = currentChoice.indexOf(choice)
      currentChoice.splice(index, 1)
    } else {
      choice.classList.add('selected')
      currentChoice.push(choice)
    }
  }
  if (currentChoice.length === 3) {
    checkSetJS.style.display = 'flex'
    checkSetJS.addEventListener('click', activateComparison)
  }
}
//EVENT LISTENERS

//Doesn't work yet
reShuffleDeck.addEventListener('click', noSetsReshuffle)

//Event Listener for loop for all gridSpace Locations
//Click GridSpaces
for (let i = 0; i < 12; i++) {
  gridSpace[i].addEventListener('click', selectCard)
}
