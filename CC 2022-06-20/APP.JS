// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
    //P: num, whole no float
    //R: console
    //E: howManyLightsabersDoYouOwn('Zach')// 18 
        //howManyLightsabersDoYouOwn('joe')// 0
    //P: howManyLightsabersDoYouOwn(name){
      // conditional if name = zach return 18
      // else return 0
  //}
    if (name === "Zach"){
      return 18
    }else {
      return 0
    }
  }