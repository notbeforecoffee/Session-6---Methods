'ARRAY METHODS IN JAVASCRIPT'

const numbers = [1,2,3,4];
const bigNumbers = [ 100, 20, 200, 30]
const months = ['march', 'jan', 'feb', 'dec']
const str = 'The quick brown fox jumps over the lazy dog.'


Array.length()
// Outputs the number of elements in an array

    console.log(bigNumbers.length) // 4


Array.push()
// Adds one or more elements to the End of an array, and returns the new array
  
    numbers.push(5, 6)
    console.log(numbers); // [ 1,2,3,4,5,6 ]



Array.split()
// Divides a string into an ordered list of substrings by searching for the pattern provided, and puts these substrings into an array that it then returns

    const words = str.split(' ') // this splits the string by spaces
    console.log(words[3]) //'fox'
    console.log(words) // ['The','quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

    const strArray = srt.split()
    console.log(strArray) // ['The quick brown fox jumps over the lazy dog']


Array.pop()
//Removes the Last element from an array and returns that element
   
    const lastNumber = number.pop()
    console.log(lastNumber); // 4


Array.splice()



Array.join()
// Joins all elements of an array into a string.  The elements are separated by a specified separator string

    const joinedMonths = months.join(', ')
    console.log(joinedMonths); // 'march, jan, feb, dec'


Array.sort()
//Sorts the elements of an array IN PLACE and returns the sorted array.  The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
    
    months.sort()
    console.log(months); //['dec', 'feb', 'jan', 'march' ]

//if we want to compare numbers, we need to pass a function:
    bigNumbers.sort((a, b) => a - b );
    console.log(bigNumbers); //[20, 30, 100, 200]

'Whats happening here?'
// if it returns a negative value, the value in a will be ordered before b
// if it returns 0, the ordering of a and b will not change
// if it returns a positive value, the value in b will be ordered before a



Array.filter()
//creates a new array with all elements that pass the test implemented by the provided function
    
    const evenNumbers = numbers.filter((num) => num %2 === 0)
    console.log(evenNumbers); // [2, 4]


Array.includes()
//Determine whether an array includes a certain element, returning true or false as appropriate
    
    const includesThree = numbers.includes(3)
    console.log(includesThree); //true


Array.find()
// Returns the value of the first element in the array that satisfies the provided testing function.  Otherwise, undefined is returned
    
    const foundNumber = numbers.find((num) => num > 3);
    console.log(foundNumber); // 4


Array.indexOf()
//Returns the first index at which a given element can be found in the array, or -1 if it is not present

    const febIndex = months.indexOf('feb');
    console.log(febIndex); // 1 (because we sorted the array earlier, with array.sort())


'ITERATIVE ARRAY METHODS'


Array.map()
// Returns a new array with the results of calling a provided function on every element in the original array
   
    const doubledNumbers = numbers.map((num) => num * 2);
    console.log(doubledNumbers); // [2, 4, 6, 8]

Array.forEach()
// Executes a provided function once for each array element.  Does not implicitly return anything
    
    numbers.forEach((num) => console.log(num * 2)) // 2, 4, 6, 8


Array.reduce()
// Executes a reduce function on each element of the array, resulting in a single output value
    
    const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
    console.log(sum); // 10


