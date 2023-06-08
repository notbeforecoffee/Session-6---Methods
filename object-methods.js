'OBJECT METHODS IN JAVASCRIPT'

const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable ? 'is Open' : 'is closed';
    console.log(
      `The ${this.position} position is ${this.type} and ${accepting}`
    );
  },
};

// Object.create();
// used to create a new object from an existing object
    const newJob = Object.create(job)
    newJob.position = 'barista'
    newJob.showDetails() // The barista position is hourly and is open


// Object.keys();
// creates an array containing only the keys from a provided object.  

    // const keys = Object.keys(job);
    // console.log(keys) // [position, type, isAvailable, showDetails]


// Object.values();
// creates an array containing only the values from a provided object

    // const values = Object.values(job)
    // console.log(values) // [ 'cashier', 'hourly', true, [Function: showDetails] ]

    // console.log(job)


