// Filter --- Map --- Chaining --- Reduce

const nums = [1,2,3,4,5,6,7,8,9,10]
const newNum = nums.filter( (num) => num > 4 )

// console.log(newNum);

const newNum2 = nums.filter( (num) => {
    return num > 4
})

// console.log(newNum2);


const myNums = []

nums.forEach( (num) => {
    if(num > 4){
        myNums.push(num);
        // console.log(num);
        // process.stdout.write(`${num} `)
    }
})
// process.stdout.write(`\n`)
// console.log(myNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBooks = books.filter( (bk) => bk.genre === 'History' )
// let userBooks = books.filter( (bk) => {
//     return bk.genre === 'History'
// } )

//  console.log(userBooks);
 
userBooks = books.filter( (bk) => bk.publish >= 2000 )
// userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000
// } )
//  console.log(userBooks);


// Map ---------------------------------------------

const arr1 = nums.map( (num) => num + 10 )
// const arr1 = nums.map( (num) => {
//     return num + 10
// } )

// console.log(arr1);

// Chaining ----------------------------------------

const arr2 = nums.map( (num) => num*10 ).map( (num) => num + 1 )

// console.log(arr2);

const arr3 = nums
                .map( (num) => num*10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >=40 )

// console.log(arr3)


// Reduce ------------------------------------------

const arr4 = [1,2,3,4,5]

const sum = arr4.reduce( function (acc, currVal) {
    // console.log(`Acc : ${acc} , CurrVal : ${currVal}`)
    return acc + currVal
}, 0)

// console.log(sum);

const total = arr4.reduce( (acc, currVal) =>  acc + currVal, 0 )

// console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const toPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(toPay);
