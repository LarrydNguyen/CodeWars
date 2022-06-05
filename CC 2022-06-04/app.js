// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    //P:num, no float
    //R: console
    //E:move(3,12)// 25
      //move(4, 8)// 20
    //P: move(position, roll){
      //return roll * 2 + position
  //}
    return (roll * 2) + position 
  }