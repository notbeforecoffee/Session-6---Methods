'OBJECT DESTRUCTURING'

const userInfo = {
  id: 123,
  firstName: 'Janis',
  lastName: 'Zaldin',
  fullName: 'Janis Zaldin',
  provider: 'msn',
  email: 'herMajesty@test.com',
  password: 'FlyingMonkies',
  profile:
    'https://lh3.googleusercontent.com/a/AAcHTtcfJhtQ8KHkUmR3z-xFTZ6X8QIdesvtdh55w-BGUA=s96-c',
};

const { firstName, email, profile } = userInfo;


// A couple of different ways to console.log, to provide a label to the info you log.  
//This helps you identify where information is coming from if you have several console logs in an application

console.log('firstName: ', firstName);
console.log({ email });
console.log(`profile: ${profile}`);




//Retrieving nested object values:

const person = {
  name: 'James',
  age: 45,
  occupation: 'undisclosed',
  //address is a nested object, within the person object
  address: {
    city: 'London',
    country: 'UK',
    building: 'MI6',
  },
};

const {
  name,
  age,
  address: { city, state, building },
} = person;


console.log('building: ', building)



// Assigning an alias while destructuring:
// aliases help us keep our code human-readable, so that we can keep track of what a variable actually represents

const { id: userId } = userInfo

console.log({userId}) // 123




//Destructuring as part of a function:

const logEmployee = ({name, occupation}) => {
    console.log(`${name}'s occupation is ${occupation}`)
}


// pass an object to the function above, and our function extracts only the things it needs
logEmployee(person); // James's occupation is undisclosed