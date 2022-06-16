// Your task is to write function factorial.

function factorial(n){
    //P: num, whole no float
    //R: return to console
    //E: factorial(3)// 1*2*3 = 6
        //factorial(5)// 1*2*3*4*5 = 120
    //P:factorial(n){
      //count
    // for loop
    // multiply by that number every loop
  //}
    let count = 0
    let finalNum = 1
    for(let i = 1 ; i <= n; i++ ){
      count += 1
      finalNum *= count
    }
    return finalNum
  }