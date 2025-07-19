// Implement a function
//  which filters out array values which satisfy the given predicate.

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

