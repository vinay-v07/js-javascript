// for 

for (let index = 0; index <=  10; index++) {
    const ele = index;
    // console.log(ele);
    process.stdout.write(`${ele} `);
}
process.stdout.write("\n");

// process.stdout.write("This will stay on the same line ");
// process.stdout.write("as this.\n"); // Add newline manually if needed.


let arr = [1,2,3,4,5];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    process.stdout.write(`${element} `);
}
process.stdout.write("\n");

// Break and Continue
for (let index = 0; index < arr.length; index++) {
    if(index == 3){
        break;
    }
    const element = arr[index];
    process.stdout.write(`${element} `);
}
process.stdout.write("\n");

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element == 2){
        continue;
    }
    process.stdout.write(`${element} `);
}
process.stdout.write("\n");


// while loop

while (true) {
    break;
}

// do-while loop

do {
    break;
} while (true);

