// You are given two sorted arrays that contain only integers.
// These arrays may be sorted in either ascending or descending order.
//  Your task is to merge them into a single array, ensuring that:

//     The resulting array is sorted in ascending order.

//     Any duplicate values are removed, so each integer appears only once.

//     If both input arrays are empty, return an empty array.

// No input validation is needed,
// as both arrays are guaranteed to contain zero or more integers.



function mergeArrays(arr1, arr2) {


    let addtogether = arr1.concat(arr2)
    let sortac = addtogether.sort((a,b) => a - b)

    let unique = [...new Set(sortac)]


    return unique

}


console.log(mergeArrays([],[]))





function add(arr1,arr2){

   let odd = []

   for(let i = 0; i < arr1.length; i++){
    odd.push(arr1[i])
   }

   for(let i = 0; i<arr2.length; i++){
    odd.push(arr2[i])
   }
   
  let sort = odd.sort((a,b) => a-b )

   const noDuplicates = sort.filter((value, index) => sort.indexOf(value) === index);

    return noDuplicates
}


add([1,2,3,4,5,6,7],[3,2,4,7,4,1,8,9,23])