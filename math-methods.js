'MATH METHODS IN JAVASCRIPT'

const numbers = [ 1, -2, 2.5, 8, 5];

const absoluteValues = Math.abs(-10) //10
const ceiling = Math.ceil(2.5) //3
const maxNum = Math.max(...numbers) //8
const minNum = Math.min(...numbers) //-2
const power = Math.pow(2,3) //8
// a second way of achieving the above
const power2= 2**3;
const squareRoot = Math.sqrt(25) //5

// if nothing else, I recommend you look into these :)
const random = Math.random()
const rounded = Math.round(2.5) //3
const floor = Math.floor(2.5) //2