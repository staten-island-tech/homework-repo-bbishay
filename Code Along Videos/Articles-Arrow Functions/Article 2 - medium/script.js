/* function sayHi(greeting){
    return greeting;
}

sayHi('Hello!'); //Hello!
 */

let sayHi = greeting => greeting;
//console.log(sayHi('Hello')); //Hello!
//a little easier to type

/* var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
        return this.names.map(function(pet){
            return `${this.owner} knows an awesome dog named ${pet}.`;
        });
    }
};
 */
//console.log(pets.description());
//does not work -- this refers to the function that called it, where owner does not exist


////solutions

//.bind()
/* var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
        return this.names.map(function(pet){
            return `${this.owner} knows an awesome dog named ${pet}.`;
        }.bind(this));
    }
}; */
//console.log(pets.description());


//define 'this' as an argument to the map function
/* var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
        return this.names.map(function(pet){
            return `${this.owner} knows an awesome dog named ${pet}.`;
        }, pets);
    }
}; */
//console.log(pets.description());


//set the value of 'this' to a variable inside the first function and reference it in the second
/* var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
        let self = this;
        return this.names.map(function(pet){
            return `${self.owner} knows an awesome dog named ${pet}.`;
        });
    }
}; */
//console.log(pets.description());

//use an arrow function
var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
        return this.names.map((pet) => {
            return `${this.owner} knows an awesome dog named ${pet}.`
        });
    }
};
console.log(pets.description());
//arrow functions dont redefine the meaning of 'this'-- keeps the context of the function it was created in
