/////////array destructuring
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

/* const a = alphabet[0]
const b = alphabet[1] */
const[a,, c, ...rest] = alphabet;

//console.log(a);
//console.log(c);
//console.log(rest);

const newArray = [...alphabet, ...numbers]
//console.log(newArray);
//same as alphabet.concat(numbers)

function sumAndMultiply(a, b){
    return [a+b, a*b, /*a/b*/]
}

const[sum, multiply, division = 'no division'] = sumAndMultiply(2,3);
//console.log(sum);
//console.log(multiply);
//console.log(division);


///////object destructuring
const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'somewhere',
        state: 'one of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
/*     address: {
        city: 'somewhere else',
        state: 'another one'
    } */
}

//const { name: firstName, address: { city }, ...more } = personTwo

//console.log(firstName);
//console.log(city);
//console.log(more);

const personThree = {...personOne, ...personTwo}
//console.log(personThree);
//for common elements between the objects (i.e., name), the second overwrites the first

function printUser({name, age, favoriteFood = 'apple'}){
    console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}`);
}

printUser(personOne);