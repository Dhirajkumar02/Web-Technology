// By using var Keyword

// 1. Dec and init into different line
// var a;
// a = 100;
// console.log(a);

// 2. Dec & init in same line
// var a = 200;
// console.log(a);

// 3. Re- Dec is possible by using var keyword
// var a;

//4. Re-initialization is possible
// a = "Hi";
// console.log(a);

//5. Re-Dec & Re-init into same line is possible
// var a = "Hello";
// console.log(a);

// By Using let keyword

// 1. Dec & init into different line
// let a;
// a = 10;
// console.log(a);

// 2. Dec & init into same line
// let b = 20;
// console.log(b);

// 3.Re- Dec is not possible by using var keyword
// let a;
// console.log(a);// Uncaught SyntaxError: Identifier 'a' has already been declared

//4. Re-initialization is possible
// let a = "Hi";
// console.log(a);

//5. Re-Dec & Re-init into same line is not possible
// let a = 100; //Identifier 'a' has already been declared

// By using const keyword
// 1. Dec and init into different line
// const a; // Uncaught SyntaxError: Missing initializer in const declaration

const a = 100;
console.log(a);
