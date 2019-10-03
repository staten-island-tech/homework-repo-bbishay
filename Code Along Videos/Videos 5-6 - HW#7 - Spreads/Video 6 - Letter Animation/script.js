/* let spreads = document.querySelector('.jump').textContent;
//console.log(spreads)

let spreadsArray = [...spreads];
//console.log(spreadsArray);
 */
//or as shown in video:
let heading = document.querySelector('.jump');
const spans = sparanWrap(heading.textContent);
console.log(spans);

function sparanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}

heading.innerHTML = sparanWrap(heading.textContent);