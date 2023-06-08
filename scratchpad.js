computer = {
  ram: 256,
  brand: 'HP',
  hdd: 2024,
  ports: [
    {
      type: 'usbc',
      connected: false,
    },
    {
      type: 'usb3',
      connected: true,
    },
  ],
  cost: 1999,
};


//Using messages to show the values as we go

for (const property in computer) {
  // check if property's value is an array
  let finalMessage = computer[property];
  if (Array.isArray(computer[property])) {
    console.log({ finalMessage });
    // if an array, we want to print property and its values separately for each of the objects
    // we loop through each item (object) in array
    // console output values of each property, separated by colon
    finalMessage = computer[property]
      .map((nestedProp) => Object.values(nestedProp).join(':'))
      //take the above iterative outputs, and join them with a comma
      .join(', ');
    console.log({ finalMessage });
  }
  console.log(`${property}: ${finalMessage}`);
}





// Same example, no messages

//remember that a for loop can be used on anything, while a forEach can only be used on an array.
for (const keyValuePair in computer) {
  if (Array.isArray(computer[keyValuePair])) {
    const arr = computer[keyValuePair]
      //map through the port object key value pair ( port: []), extract the values, join them with ':', then perform the join that is outside the map brackets, to add a comma.  because this second join is outside the map function, it is only performed once
      .map((portObject) => Object.values(portObject).join(':'))
      .join(', ');
    console.log(`${keyValuePair}: ${arr}`);
  } else {
    console.log(`${keyValuePair}: ${computer[keyValuePair]}`);
  }
}





// Using Array.reduce()
Object.keys(computer).forEach((key) => {
  console.log('key: ', key);
  if (Array.isArray(computer[key])) {
    // reduce is often used to add values together, but it does this by 'reducing' the elements in an array, until only an accumulated value is left
    // reduce takes two required arguments, and one optional one.  'acc' is the accumulated value, and it is what is returned at the end of the function
    // 'b' is the current value of the loop, or iteration (remember, reduce iterates over an array, the same way a .map() does).
    // the optional argument, that we are not using here, is a starting value for 'acc'.  If no value is supplied, 'acc' starts as the value of Array[0]

    const arr = computer[key].reduce((acc, b) => {
      // normally, we would add 'b' to 'acc', to arrive at a cumulative value for 'acc', but in our case, we are skipping that step, and instead returning the Object.values of 'acc' (Array[0], because we didn't supply an initial value), concatenated with a ', ' and the object.values of 'b', which is our current value, or Array[1]
      return Object.values(acc).join(':') + ', ' + Object.values(b).join(':');
    });
    console.log(`${key}: ${arr}`);
  } else {
    console.log(`${key}: ${computer[key]}`);
  }
});


//as an alternative method, that would work even if there were more than two objects in the ports array:
// (and thank you guys for providing this method today, as an alternative!)

for (const key in computer) {
  if (Array.isArray(computer[key])) {
    const arr = computer[key]
      .reduce((acc, currentValue) => {
        // this is a form of array destructuring, so we are splitting the elements in the array we are creating with Object.values
        // See: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
        const [property, value] = Object.values(currentValue);
        // the accumulator value is a psudo array, and we can push to it on each iteration through the array.  This is a way of getting around the normal limitation of .reduce method, that only returns the last value 
        acc.push(`${property}:${value}`);
        return acc;
      }, [])
      .join(", ");
    console.log(`${key}: ${arr}`);
  } else {
    console.log(`${key}: ${computer[key]}`);
  }
}



//Using Array.flatMap()

//  I did this just because it was the first time I ever got to use a flatMap() :)

// We are making an array by using Object.keys so that we can use a forEach loop to iterate over the array of keys
Object.keys(computer).forEach((key) => {
  if (Array.isArray(computer[key])) {
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    // See:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

    const arr = computer[key].flatMap(
      (nestedProp) =>
        //  the 'flat' part of flatMap flattened the ports array into two objects inside of 'computer', so the value of our array is no longer an array, and now looks like this:

        //     {
        //       type: 'usbc',
        //       connected: false,
        //     },
        //     {
        //       type: 'usb3',
        //       connected: true,
        //     }

        // this is equivalent to Array.flat(1), meaning flattened to the depth of one

        // nestedProp represents the key value pairs inside of ports
        Object.values(nestedProp).join(':')
      // console.log( 'nestedProp: ', nestedProp) < -- you can't actually run this console log, without breaking the function, but this is the output, if you were to do so:
      // nestedProp:  { type: 'usbc', connected: false }
      // nestedProp:  { type: 'usb3', connected: true }

      // the 'map' part of flatMap() is iterating over both nestedProps, and returning an array. This array has two elements, which are the Object.values of nestedProp.  Array[0] = 'usbc:false', while Array[1] = usb3:true.  Because of this structure, we don't need to add our own comma 
    );

    console.log(`${key}: ${arr}`);
  } else {
    console.log(`${key}: ${computer[key]}`);
  }
});
