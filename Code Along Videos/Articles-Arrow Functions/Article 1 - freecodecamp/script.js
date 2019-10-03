//////Arrow funtions

/* function timesTwo(params){
    return params*2;
}

timesTwo(4); //8 */
//regular function

let timesTwo = params => params * 2;
//console.log(timesTwo(4));
//much shorter


//////if no parameters

let noParam = _ => 42;
//or
//let noParam = () => 42;

//console.log(noParam());

//////if single parameter

let singleParam = x => 42;
//or
//let singleParam = (x) => 42;
//parantheses optional

//console.log(singleParam());

//////if multiple parameters

let multiParam = (x, y) => 42;
//paranthesis required

//console.log(multiParam());



/////usage in an if statement

let feedTheCat = (cat) => {
    if (cat === 'hungry'){
        return 'Feed the cat idiot';
    } else {
        return 'Do not feed the cat';
    }
}


/////Block Body

let addValues = (x, y) => {
    return x + y;
}
//if the function is in a block, use the return statement

let objectLiteral = x => ({y: x});



//arrow functions --- harder to debug, no use of 'this' (cant self reference)
