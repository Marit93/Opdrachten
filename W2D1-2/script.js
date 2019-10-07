function isArray(input) {
    return Array.isArray(input)   
   };

console.log(isArray('Winc Winc, nudge nudge')); 
console.log(isArray([1, 2, 4, 0]));

let benelux = ["Belgie", 1, "Nederland", 2, "Luxemburg", 3]
console.log(benelux[0]);

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
    
    console.log(presidents[0])

   let st = ['Winc', 'Academy', 'is', 'leuk', ';-}']
   function stringsTogether(array) {
    return array.join(' ')
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));


function combineArrays(array1, array2) {
return array1.concat(array2)
}
        
 console.log(combineArrays([1,2,3], [4,5,6]) );
// result should be [ 1, 2, 3, 4, 5, 6 ]


