// Given an array of Boolean values and a logical operator,
// return a Boolean result based on sequentially applying the operator to the values in the array.
// Examples

//     booleans = [True, True, False], operator = "AND"

//     True AND True -> True
//     True AND False -> False
//     return False

//     booleans = [True, True, False], operator = "OR"

//     True OR True -> True
//     True OR False -> True
//     return True

//     booleans = [True, True, False], operator = "XOR"

//     True XOR True -> False
//     False XOR False -> False
//     return False

// Input

//     an array of Boolean values (1 <= array_length <= 50)
//     a string specifying a logical operator: "AND", "OR", "XOR"


// first i will get an array of boolean where it will be lots of true and false 
// second i will also get an logical operator like "AND" "OR" "XOR"

// i have to give return on base their logic if all true and Opearotor is "AND" then return true if not then return false 

// same gose for every value 




function logicalCalc(array, op){

  if(op === "AND"){
    for(let i = 0; i < array.length; i++){
      if(array[i]===false){
        return false
      }
    }

    return true
  }

  if(op==="OR"){
    for(let i = 0; i < array.length; i++){
      if(array[i] === true){
        return true
      }
    }

    return false
  }

  // if(op === "XOR"){
  //   return array.filter(Boolean).length % 2 === 1;
  // }

}


let arr = [false,false,true,true]

console.log(logicalCalc(arr,"XOR"))




