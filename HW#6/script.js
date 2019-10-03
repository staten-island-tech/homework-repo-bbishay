/*let vidArray = [];
let listItem = document.getElementsByTagName('li');
vidArray.push(listItem);
console.log(vidArray);*/
//becomes an html collection rather than an array

let vidArray = Array.from(document.querySelectorAll('li'));
//console.log(vidArray); 

let flexArray = vidArray.filter(function(item){
    return item.textContent.includes('Flexbox');
}); 
//console.log(flexArray);
 



/* for(i = 0; i < vidArray.length; i++){
    console.log(vidArray[i].dataset.time);
} */

let times = flexArray.map(i => i.dataset.time);
//console.log(times);

function multiplySixty(x){
    return x*60;
}

let seconds = times.map(timeCode => {
    let parts = timeCode.split(':').map(part => parseFloat(part));
    //console.log(parts);
    return multiplySixty(parts[0]) + parts[1];
})
//console.log(seconds);

const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]

let overSeventy = numbers.filter(element => {
    return element > 70;
})
console.log(overSeventy);
