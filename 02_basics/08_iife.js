// Immediately Invoked Function Expressions (IIFE)

// Named IIFE -
(function one(){
    console.log("Hello World ! ");      //Hello World ! 
})();

// UnNamed IIFE - 
( () => {
    console.log("Hello World ! ");      //Hello World ! 
})();

( (name) => {
    console.log(`Hello ${name} !`);     //Hello vinay !
})('vinay');                            //passing Argument

// Use cases of IIFEs include:

// *** Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// Avoiding polluting the global namespace by creating a new scope.
// Creating a new async context to use 'await' in a non-async context.
// Computing values with complex logic, such as using multiple statements as a single expression.
