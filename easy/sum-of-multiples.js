

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples





function sumMul(n,m){
    let result = 0
    if(n>0 && m>0){
        for(let i = 1; i < m; i++){
            if(n*i < m){
                result += n*i
            }
            
        }
        return result
    }

    return "INVALID"
}


console.log(sumMul(3,10))