const superhero = [{name: "Batman", alter_ego: "Bruce Wayne"}, {name: "Superman", alter_ego: "Clark Kent"}, {name: "Spiderman", alter_ego: "Peter Parker"},] ;
console.log(superhero.find((superhero)=>{return superhero.name === "Spiderman"}));

let doubleArrayValues = [1, 2, 3]
doubleArrayValues.forEach ( function(item, index, arr) {
    arr[index] = item * 2;
        });
 console.log(doubleArrayValues);

 let isBiggerThan10 = [1, 4, 3, 6, 9, 7, 11]
 // result should be true
 let even = function(element) {
    return element > 10;
  };
  
  console.log(isBiggerThan10.some(even));

 let italyInTheGreat7 = (['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be false
console.log(italyInTheGreat7.includes('Italy'));

let numbers = [1, 4, 3, 6, 9, 7, 11]
let newArray = numbers.map(myFunction)

function myFunction(num) {
  return num * 2;
}

console.log(newArray)
// result should be [2, 8, 6, 12, 18, 14, 22]

let ga = [ 1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

console.log(ga.filter((number) => {
    return number < 100
    }))
// result should be [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]

let bigSum = ([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
function lol(total, number){
    return total + number;
}
console.log(bigSum.reduce(lol))
// result should be 1118