let x = 2 + '2';
//console.log(x);
//logs 22, combination of a number and a string

let y = 2 + 2 + '2'
//console.log(y);
//logs 42, can combine the numbers, then adds that to the string

let z = 2 + true;
//console.log(z);
//logs 3, conversion of a boolean to a number--1 is true, 0 is false

let a = 2 + true + '2';
//console.log(a);
//logs 32

let b = true + '2';
//console.log(b);
//logs true2, forced to convert 'true' into a string

let c = Number('3');
//console.log(c);
//converts string into number

let d = Number('hello');
//console.log(d);
//NaN--not a number
//console.log(typeof(d));
//gives you number--type of NaN is a number

let e = Boolean(1);
//console.log(e);
//true

let f = Boolean(17);
//console.log(f);
//still true

let g = Boolean(0);
let h = Boolean('');
let i = Boolean(null);
let j = Boolean(undefined);
//false values

if(h) {
}
//instead of if((x !== undefined) || (x !== 0) || (x !== null) || (x !== ''){}), if(x){} checks to see if x is any value that is greater than 0

if([]){

}
//empty array as a boolean is true because objects are true, check array length instead