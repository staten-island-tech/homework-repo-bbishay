//////Global scope

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope', a, b, c);   
}
//test();

//different variables because of different scope

/* if(true){
    //Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope', a, b, c);
}

for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
} */

//console.log('Global scope', a, b, c);
//changes the value of var a in the global scope

//conclusion: var is stupid