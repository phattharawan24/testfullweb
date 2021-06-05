document.addEventListener('DOMContentLoaded', () => {
    createGameBoard()
});

const cardArray = [{
    name: "AC1",
    image: "front_AC1.png"
},{
    name: "AC1",
    image: "front_AC1_info.png"
},{
    name: "AC2",
    image: "front_AC2.png"
},{
    name: "AC2",
    image: "front_AC2_info.png"
},{
    name: "DC1",
    image: "front_DC.png"
},{
    name: "DC1",
    image: "front_DC_info.png"
},{
    name: "DC2",
    image: "front_DC2.png"
},{
    name: "DC2",
    image: "front_DC2_info.png"
},{
    name: "5",
    image: "front_5.png"
},{
    name: "5",
    image: "front_5_info.png"
}];



function createGameBoard() {
    let gameboard = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = 'grid';

    

    for (let index = 0; index < 10; index++) {
        let item = document.createElement('div');
        item.className = 'item';
        let card = document.createElement('img');
        card.setAttribute('src','back.png');
        card.setAttribute('id',index);
        card.className='responsive';
        //card.setAttribute('onclick','flipcard()');
        card.addEventListener('click',flipcard);
        item.appendChild(card);
        gridContainer.appendChild(item);
    }
    

    
    gameboard.appendChild(gridContainer);

    cardArray.sort(() =>  0.5 - Math.random());
}


let cardChoosen = [];
let cardChoosenID = [];
let score = 0;

function flipcard() {
    let cardID = this.getAttribute('id');
    this.setAttribute('src',cardArray[cardID].image);
    cardChoosen.push(cardArray[cardID]);
    cardChoosenID.push(cardID);
    if(cardChoosen.length === 2) {
        document.getElementById('gameConsole').textContent = 'ไหนดูสิ ใช่หรือเปล่านะ...';
        setTimeout(checkForMatch,2000);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');

    let selectedCardOne = cardChoosenID[0];
    let selectedCardTwo = cardChoosenID[1];

    let consoleMessage = "";

    if(cardChoosen[0].name === cardChoosen[1].name) {
        cards[selectedCardOne].setAttribute('src','correct.png');
        cards[selectedCardTwo].setAttribute('src','correct.png');
        score = score+1;
        consoleMessage = 'คุณจับคู่หัวชาร์จได้ถูกต้อง'
    }else{
        cards[selectedCardOne].setAttribute('src','back.png');
        cards[selectedCardTwo].setAttribute('src','back.png');
        consoleMessage = 'Sorry, try again...'
    }

    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameConsole').textContent = consoleMessage;


    cardChoosen = [];
    cardChoosenID = [];

    if(score === cardArray.length / 2) {
        document.getElementById('gameConsole').textContent = 'คุณจับคู่หัวชาร์จได้ครบแล้ว'
    }
}