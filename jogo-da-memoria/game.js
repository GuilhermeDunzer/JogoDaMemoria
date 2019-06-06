var column0 = document.querySelector('#column0');

class MemoryCard {
    constructor(identifier) {
        this.foundMatch = false;
        this.identifier = identifier;
        this.box = {};
    }

    logValues() {
        console.log("encontrou par" + this.foundMatch + "identificador" + this.identifier);
    }
}

function renderMemoryCard() {
    column0.innerHTML = '';

    var a0_0memoryCard = new MemoryCard("blue");
    a0_0memoryCard.box = createBox();
    column0.appendChild(a0_0memoryCard.box);



}


function createBox(){
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    return box
}

renderMemoryCard();

/*


var lastMemoryCard = null

var a0_0 = document.querySelector('#a0_0');
var a0_0memoryCard = new MemoryCard("blue");
a0_0.onclick = a0_0clicked;


var a1_0 = document.querySelector('#a1_0');
var a1_0memoryCard = new MemoryCard("blue");
a1_0.onclick = a1_0clicked;


var a0_1 = document.querySelector('#a0_1');
var a0_1memoryCard = new MemoryCard("green");
a0_1.onclick = a0_1clicked;

var a1_1 = document.querySelector('#a1_1');
var a1_1memoryCard = new MemoryCard("green");
a1_1.onclick = a1_1clicked;


let map = new Map([[a0_0, a0_0memoryCard], [a1_0, a1_0memoryCard], [a0_1, a0_1memoryCard], [a1_1, a1_1memoryCard]]);


function a0_0clicked() {

    var memoryCard = map.get(a0_0);
    memoryCard.logValues();

    if (lastMemoryCard == null) {
        lastMemoryCard = memoryCard
    } else {
        if (lastMemoryCard.identifier === memoryCard.identifier) {
            console.log("DEU MATCH")
        } else {
            console.log("NÃO DEU MATCH")
        }
        lastMemoryCard = null
    }

    a0_0.style.backgroundColor = memoryCard.identifier;
}

function a1_0clicked() {
    var memoryCard = map.get(a1_0);
    memoryCard.logValues();

    if (lastMemoryCard == null) {
        lastMemoryCard = memoryCard
    } else {
        if (lastMemoryCard.identifier === memoryCard.identifier) {
            console.log("DEU MATCH")
        } else {
            console.log("NÃO DEU MATCH")
        }
        lastMemoryCard = null
    }

    a1_0.style.backgroundColor = memoryCard.identifier;
}

function a0_1clicked() {
    var memoryCard = map.get(a0_1);
    memoryCard.logValues();

    if (lastMemoryCard == null) {
        lastMemoryCard = memoryCard
    } else {
        if (lastMemoryCard.identifier === memoryCard.identifier) {
            console.log("DEU MATCH")
        } else {
            console.log("NÃO DEU MATCH")
        }
        lastMemoryCard = null
    }

    a0_1.style.backgroundColor = memoryCard.identifier;
}

function a1_1clicked() {
    var memoryCard = map.get(a1_1);
    memoryCard.logValues();

    if (lastMemoryCard == null) {
        lastMemoryCard = memoryCard
    } else {
        if (lastMemoryCard.identifier === memoryCard.identifier) {
            console.log("DEU MATCH")
        } else {
            console.log("NÃO DEU MATCH")
        }
        lastMemoryCard = null
    }

    a1_1.style.backgroundColor = memoryCard.identifier;
}

/*
document.querySelector('#fuo').addEventListener('click', function () {
    console.log( 'oi' );

});
 */



