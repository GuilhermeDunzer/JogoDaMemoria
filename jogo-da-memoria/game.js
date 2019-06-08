var column0 = document.querySelector('#column0');

var memoryCard0_0 = null;
var memoryCard0_1 = null;
var memoryCard0_2 = null;
var memoryCard0_3 = null;

class MemoryCard {
    constructor(identifier) {
        this.foundMatch = false;
        this.identifier = identifier;
        this.box = {};
    }
}

function renderMemoryCard() {
    column0.innerHTML = '';

    memoryCard0_0 = createMemoryCard("blue");
    memoryCard0_1 = createMemoryCard("blue");
    memoryCard0_2 = createMemoryCard("yellow");
    memoryCard0_3 = createMemoryCard("yellow");

    column0.appendChild(memoryCard0_0.box);
    column0.appendChild(memoryCard0_1.box);
    column0.appendChild(memoryCard0_2.box);
    column0.appendChild(memoryCard0_3.box);

}

function createMemoryCard(identifier) {

    var memoryCard = new MemoryCard(identifier);
    memoryCard.box = createBox();
    memoryCard.box.addEventListener('click', function () {

            console.log(memoryCard.identifier);

            if (memoryCardSelected === null) {
                memoryCardSelected = memoryCard;
                memoryCard.box.style.backgroundColor = memoryCard.identifier;
            } else {
                if (memoryCardSelected.identifier === memoryCard.identifier) {
                    memoryCard.box.style.backgroundColor = memoryCard.identifier;
                    memoryCardSelected.foundMatch = true;
                    memoryCard.foundMatch = true;
                } else {
                    memoryCardSelected.box.style.backgroundColor = "red";
                }
                memoryCardSelected = null;
            }

            isGameEnded();
        }
    );

    return memoryCard;
}

function isGameEnded() {
    console.log("memory card 00 "+memoryCard0_0.foundMatch);
    console.log("memory card 01 "+memoryCard0_1.foundMatch);
    console.log("memory card 02 "+memoryCard0_2.foundMatch);
    console.log("memory card 03 "+memoryCard0_3.foundMatch);

    if (memoryCard0_0.foundMatch === true && memoryCard0_1.foundMatch === true && memoryCard0_2.foundMatch === true && memoryCard0_3.foundMatch === true) {
        console.log("Você encontrou todos os pares e venceu o jogo!!");
    }

}

function createBox() {
    var box = document.createElement('div');
    box.setAttribute('class', 'box');

    return box
}

var memoryCardSelected = null;

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



