// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    //P: strings, num no float
    //R: string to the console
    //E: expandedForm(51)// "50 + 1"
        //expandedForm(1003)// "1000 + 3"
    //P: expandedForm(num){
      // turn number into a string
      // forloop, start at 0, end at length of string, increase by 1
      // 
  //}
    num = num.toString()
    let equation = []
    let multiplier = 1 
    
    for(let i = 1; i<=num.length; i++){
      const digit = num[num.length-i]
      digit > 0 && equation.unshift(digit * multiplier)
      multiplier *= 10 
    }
    return equation.join(" + ")
  }