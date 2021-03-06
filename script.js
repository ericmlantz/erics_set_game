//Card Properties
shapes = ['square', 'circle', 'semiCircle']
colors = ['Green', 'Blue', 'Purple']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outline']

//GLOBAL DOM VARIABLES
let checkSetJS = document.querySelector('.checkSet')
let reShuffleDeck = document.querySelector('.reShuffle')
let getCardJS = document.querySelector('.getCard')
let gameGridJS = document.querySelector('.gameGrid')
let inAppUpdate = document.querySelector('.inAppUpdate')
let endGameJS = document.querySelector('.endGame')
let fullBoard = document.querySelector('.section1')
let endGameInfoJS = document.querySelector('.endGameText')
let endGameTitle = document.querySelector('.endGameTitle')
let endGameTitle2 = document.querySelector('.endGameTitle2')

//GLOBAL ARRAYS
let deck = []

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

//Function to get 'top' card in the deck
function addCardToGrid() {
  addCard = deck.shift()
  return addCard
}

//Empty GridSpace Array
gridSpace = []
let topCard = 0
//Function to Get New 12 Card Board
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

//Make new grid of cards if Reshuffle Button clicked
function noSetsReshuffle() {
  if (deck.length < 12) {
    reShuffleDeck.addEventListener('click', noSetsReshuffle)
    inAppUpdate.innerText =
      'You are at the end of the deck. You cannot request any more reshuffles, but you can continue to look for SETs from the cards on the board. Once you are unable to find any more SET, click the End button to view your score!'
    reShuffleDeck.style.display = 'none'
    endGameJS.style.display = 'flex'
  } else {
    for (let i = 0; i < 12; i++) {
      gridSpace[i].innerHTML = ''
    }
    newGrid()
  }
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
  if (deck.length < 1) {
    deck.indexOf(currentChoice[0])
    currentChoice[0].innerHTML = ''
    currentChoice[1].innerHTML = ''
    currentChoice[2].innerHTML = ''
    inAppUpdate.innerText =
      'You are at the end of the deck. No new cards will be added, but you can continue to look for SETS. Once you are unable to find any more SET, click the End button to view your score!'
    reShuffleDeck.style.display = 'none'
    endGameJS.style.display = 'flex'
    resetFoundSet()
  } else {
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
  }
}

//Sets Score Count Global Variable
let numOfSets = 0
//Set Verification - ALL Must be TURNED true for a set to occur
let numberVerified = false
let shapeVerified = false
let shadeVerified = false
let colorVerified = false

function activateComparison() {
  checkForSet()
  if (numberVerified && shapeVerified && shadeVerified && colorVerified) {
    numOfSets += 1
    addThreeNew()
    inAppUpdate.innerText = 'You got a SET!'
  } else {
    numOfSets -= 1
    resetFoundSet()
    inAppUpdate.innerText = 'That is not a SET, Try Again!'
  }
}

//Reset The Selected Set Parts To Empty
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
    shapeVerified = true
  } else {
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
    numberVerified = true
  } else {
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
    colorVerified = true
  } else {
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
    shadeVerified = true
  } else {
  }
}

//End of Game Button Event Callback Function
function endGamePlay() {
  fullBoard.innerHTML = ''
  endGameInfoJS.style.display = 'flex'
  endGameTitle.style.display = 'flex'
  endGameTitle2.style.display = 'flex'
  endGameInfoJS.innerText = numOfSets
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
//Reshuffle Deck Event Listender
reShuffleDeck.addEventListener('click', noSetsReshuffle)
//Select Cards Event Listener
for (let i = 0; i < 12; i++) {
  gridSpace[i].addEventListener('click', selectCard)
}
//End Game Event Listener
endGameJS.addEventListener('click', endGamePlay)
