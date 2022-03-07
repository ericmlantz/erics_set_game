shapes = ['diamond', 'squiggle', 'oval']
colors = ['red', 'purple', 'green']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outlined']

class Card {
  constructor(shape, color, shade, number) {
    this.shape = shape
    this.color = color
    this.shade = shade
    this.number = number
  }
}

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
