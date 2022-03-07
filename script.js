//Card Properties
shapes = ['diamond', 'squiggle', 'oval']
colors = ['red', 'purple', 'green']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outlined']

//Card Class that has the blueprint for what each card must have: shape, color, number, and shading
class Card {
  constructor(shape, color, shade, number) {
    this.shape = shape
    this.color = color
    this.shade = shade
    this.number = number
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
