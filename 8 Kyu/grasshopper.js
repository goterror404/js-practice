// Terminal game move function

// In this game, the hero moves from left to right.
// The player rolls the dice and moves the 
// number of spaces indicated by the dice
// two times.

// Create a function for the terminal game that takes
// the current position of the hero and the roll (1-6)
// and return the new position.



// hero move from left to right
// the player roll the dice 
// and will move as per the dice number but x two times for eg for 2 = 4


function move(position,roll){
return position+roll*2
}


console.log(move(5,4))