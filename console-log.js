'CONSOLE METHODS IN JAVASCRIPT'

// the 'Console' object provides access to the browser's debugging console.  Not all console methods are supported by all IDEs



console.clear()
// clear the console

console.count()
// log the number of times this line has been called. Takes a label as an optional argument; if not label is specified, the label 'Default' is provided.

console.countReset()
// resets the value of the counter with the given label


console.table()
// Displays tabular data as a table.  It takes two parameters: 
// tabledata: required.  The data to fill the table with
// tablecolumns: optional.  An array with the names of the table columns

        // Using an array of objects:
        const car1 = {name:"Audi", model:"A4"}
        const car2 = {name:"Volvo", model:"XC90"}
        const car3 = {name:"Ford", model:"Fusion"}

        console.table([car1, car2, car3]);

        // Only include the "model" column in the table:
        const car4 = {name:"Audi", model:"A4"}
        const car5 = {name:"Volvo", model:"XC90"}
        const car6 = {name:"Ford", model:"Fusion"}

        console.table([car4, car5, car6], ["model"]);

console.time()
// Starts a timer. Takes a label as an optional argument.

console.timeEnd()
// Stops the specified timer and logs the elapsed time in milliseconds since it started

console.timeLog()
// Logs the value of the specified timer to the console

console.trace()
// Outputs a stack trace (a trace that shows how the code ended up at a certain point)  Takes a label as an optional argument.

// Pro Tip: later in your development journey (likely 1020), you will run into try/catch blocks, which are a good way of dealing with asynchronous code in a server.  They normally look like this:

try {

}catch (e) {
        console.log(e.message)
}
// instead of console.log, use console.trace(e.message) -> you will get more information our of your error log

// see: https://developer.mozilla.org/en-US/docs/Web/API/console#stack_traces

console.assert()
// log a message and stack trace to console if the first argument is false



'THE FOLLOWING METHODS ARE ALL VARIATIONS OF CONSOLE.LOG(): COLOURS LISTED ARE BROWSER DEPENDANT'

console.debug()
// outputs a message to the console with the log level `debug` (meaning doesn't display in the console by default, must be selected for in the filter options of your browser)

console.error()
//Outputs an error message with red text colour

console.warn()
// outputs a warning with yellow text colour

console.info()
//Outputs a message with blue text colour.