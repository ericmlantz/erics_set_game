shapes = ['diamond', 'squiggle', 'oval']
colors = ['red', 'purple', 'green']
numbers = ['one', 'two', 'three']
shading = ['solid', 'striped', 'outlined']

for (let shapesIndex = 0; shapesIndex < shapes.length; shapesIndex++) {
  for (let colorsIndex = 0; colorsIndex < colors.length; colorsIndex++) {
    for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
      for (
        let shadingIndex = 0;
        shadingIndex < shading.length;
        shadingIndex++
      ) {
        console.log(
          shapes[shapesIndex] +
            ' ' +
            colors[colorsIndex] +
            ' ' +
            numbers[numbersIndex] +
            ' ' +
            shading[shadingIndex]
        )
      }
    }
  }
}
