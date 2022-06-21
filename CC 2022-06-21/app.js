// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string){
    //P: string
    //R: console
    //E: reverse('Hello World')// 'World Hello'
        // reverse('Hi There.')// 'There. Hi'
    //P: reverse(string){
      // string.split('').reverse().join('')
  //}
   return string.split(' ').reverse().join(' ')
  }