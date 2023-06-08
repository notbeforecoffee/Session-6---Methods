'OBJECT DESTRUCTURING'

const userInfo = {
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

console.log(firstName);
console.log('firstName: ', firstName);
console.log(email);
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



// assigning an alias while destructuring:

const { password: pswd } = userInfo

console.log(pswd)




//Destructuring as part of a function:

const logEmployee = ({name, occupation}) => {
    console.log(`${name}'s occupation is ${occupation}`)
}

logEmployee(person); // James's occupation is undisclosed