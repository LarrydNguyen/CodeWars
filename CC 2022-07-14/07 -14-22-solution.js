// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    //P: string, 
    //R: string
    //E: areYouPlayingBanjo('ryan')// 'rayn plays banjo'
    //P: areYouPlayingBanjo(name){
      // split the array and unshift the first element of the array. 
      // conditional if it === R.toLowerCase() === 'r'
      // return 'rayn plays banjo'
      // else return name + does not play banjo
  //}
    let lowerCaseName = name.toLowerCase(), 
        arr = lowerCaseName.split(''),
        start = arr.shift(),
        r = 'R'.toLowerCase()
    console.log(start)
    console.log(r)
    if ( start === r){
      return `${name} plays banjo`
    }else {
      return `${name} does not play banjo`
    }
  }