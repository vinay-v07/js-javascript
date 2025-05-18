const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel);
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel.length);     //4
// console.log(marvel[3][1]);      //flash

const allHeros = marvel.concat(dc)
console.log(allHeros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const newHeros = [...marvel, ...dc]
console.log(newHeros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const arr1 = [1,2,3,[4,5,6],7,[6,5,[4,5]]]
console.log(arr1);


const arr2 = arr1.flat(Infinity)    // depth: infinity
console.log(arr2);

console.log(Array.isArray("vinay"));    //false
console.log(Array.from("vinay"));       //convert given string to array.  [ 'v', 'i', 'n', 'a', 'y' ]
console.log(Array.isArray("vinay"));    //false

console.log(Array.from({name: "vinay"}))    // []: empty string


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));    //[ 100, 200, 300 ]
