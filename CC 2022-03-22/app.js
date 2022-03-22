// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bodyMI = (weight/(height * height))
      console.log(bodyMI)
    if ( bodyMI <=18.5 ){
      return "Underweight"
    }else if ( bodyMI <= 25.0){
      return "Normal"
    }else if ( bodyMI <= 30.0){
      return "Overweight"
    }else if( bodyMI > 30){
      return "Obese"
    }
  }