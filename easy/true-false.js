
// Create a method all which takes two params:

    // a sequence
    // a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the 
// sequence. Otherwise, it should return false. If the sequence is empty,
//  it should return true, since technically nothing failed the test.



// the function (all) will return true if, the function in param will return true for 
// the elements in sequence , and if the sequence is empty it will return false





function all(p,fun){

    if(sequence.length === 0){
        return true
    }


    for(let i = 0; i < p.length; i++){
        if(!fun(p[i])){
            return false
        }
    }

    return true
}


