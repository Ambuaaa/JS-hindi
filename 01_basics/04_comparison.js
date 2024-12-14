// console.log( 2 > 1 );
// console.log( 2 >= 1 );
// console.log( 2 < 1 );
// console.log( 2 == 1 );
// console.log( 2 != 1 );

// console.log("2" > 1 );
// console.log("02" > 1);

// console.log(null > 0 );
// console.log(null == 0 );
// console.log(null >= 0 ); // True because equity check == and comparison >, <, >= ,<= works differently.Comparisons convert null to a number , treating it as 0. That's why null>= 0 is true and null = 0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); // ALways gives false in undefined 

// === -> Strict check . Checks values as well as it's data type 
console.log("2" === 2 ); // false because data type is different 

// conclusion 
// 1) here equity and comparison are two different thing.
// 2) We should avoid null and undefined code . write clean code 