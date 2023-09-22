let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
console.log(countEl);

let count = 0
function increment(){
    count = count + 1;
    countEl.innerText = count;
}

function decrement(){
    count = count - 1
    countEl.innerText = count;
}

function save() {
    let countstr = count + " - "
    let newCount = 0 
    saveEL.innerText += countstr;
    countEl.innertext = newCount
}


