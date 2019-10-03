//////////Function declarations

function greet(){
    //console.log('Hello');
    return 'Hello';
}

//greet();
//call the function
//console.log(greet());


function greetPerson(firstName = 'John', lastName = 'Doe'){
    //if(typeof firstName === 'undefined'){firstName = 'John'}
    //if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //old way to set defaults
    //new way by directly defining them in the parameters
    return `Hello ${firstName} ${lastName}`;
}
//console.log(greetPerson('Steve', 'Smith'));
//Steve Smith overwrites the defaults

//////////Function expressions

const square = function(x = 0){
    return x*x;
};

//console.log(square(8));
//64



////////Immediately invokable function expressions - IIFEs

(function(name){
    //console.log('IIFE Ran..');
    //console.log(`Hello ${name}`);  
})('Brad');



/////////Property methods

const todo = {
    add: function(){
        console.log('Add todo');      
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit(22);
todo.delete();