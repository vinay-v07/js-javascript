// for of, Map, for in, for each
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const it of arr) {
    // console.log(`${it} `);
}

const str = "Hello World!"
for (const it of str) {
    if(it == " "){
        continue;
    }
    // console.log(`Each char is ${it}`);
}


// Map

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('UN', "United Kingdom")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// for in loop

// Objects

const obj = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in obj) {
    const element = obj[key];
    // console.log(key, ":-", element)
}

// for each loop

const coding = ["js", "java", "c++", "ruby", "python"]

coding.forEach( function (item) {
    // console.log(item);
} )

// coding.forEach( (item) => {      // arrow function
//     console.log(item);
// } )

// coding.forEach( (item, index, coding) => {      // arrow function
//     console.log(item, index, coding);
// } )

const myObj = [
    {
        lName: "javascript",
        extn: "js"
    },
    {
        lName: "java",
        extn: "java"
    },
    {
        lName: "c++",
        extn: "cpp"
    },
    {
        lName: "ruby",
        extn: "rb"
    }
]

myObj.forEach( (item) => {
    console.log(item.lName);
})