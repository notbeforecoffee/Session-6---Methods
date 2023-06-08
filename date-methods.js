'DATE METHODS IN JAVASCRIPT';

Date.now();

Date.toLocaleDateString();
// returns a string with a language-sensitive representation of the date portion of the specified date in the users timezone

    const date = new Date();
    console.log('date: ', date); // this will output a long-form date, and will look something like: 2023-06-08T02:16:01.271Z
    const modifiedDate = date.toLocaleDateString();
    console.log(modifiedDate); // 6/7/2023

Date.toISOString();


Date.toGetTime();


Date.getDate();


Date.setDate();





// Here is an example of a date function in the real word.  I wrote it for a professional application that needs to track the closing date of a deal, and still be easily human-readable:

  const CloseDate = new Date(new Date().setDate(new Date().getDate() + 30)) // { date: 2023-07-08T02:17:50.670Z }
    .toISOString() // '2023-07-08T02:17:09.475Z' (convert our date to a string)
    .split('T')[0]; // hack off the unsightly bit at the end
  
    console.log(CloseDate) //2023-07-08

// Obviously, this is more complicated than what we covered in our lab, but gives you an idea of how you can pass a function, inside a method, and chain it, to extend the original function.  The last number, '30', represents the days to be added to the date the function arrives at.

// There are other ways of doing this, and I could probably do it better, now - heck you guys probably improve it, too, with all we have reviewed!  But I thought you would appreciate seeing it in action
