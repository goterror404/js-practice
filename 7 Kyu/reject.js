// Implement a function
//  which filters out array values which satisfy the given predicate.


// i have to write a function that take an array and predicate 

// if the predicate satisfy the value will be filter out from an array like if the array get 
// element true it will be filter out form this and the false one will be in it 

function reject(array, predicate) {
    
    let final = []

    for(let i = 0 ; i<array.length; i++){
        if(!predicate(array[i])){
            final.push(array[i])
        }
    }

    return final
}



function reject1(array,predicate){
    
    return array.filter(num => !predicate(num))

}

