document.addEventListener('DOMContentLoaded', () => {
    createGameBoard()
});

const cardArray = [{
    name: "AC1",
    image: "https://www.picz.in.th/image/Pe1TWS"
},{
    name: "AC1",
    image: "https://www.picz.in.th/image/Pe1t1n"
},{
    name: "AC2",
    image: "https://www.picz.in.th/image/Pe1wAg"
},{
    name: "AC2",
    image: "https://www.picz.in.th/image/Pe11eW"
},{
    name: "DC1",
    image: "https://www.picz.in.th/image/Pe1Zk2"
},{
    name: "DC1",
    image: "https://www.picz.in.th/image/Pe1cO1"
},{
    name: "DC2",
    image: "https://www.picz.in.th/image/Pe1gXy"
},{
    name: "DC2",
    image: "https://www.picz.in.th/image/Pe1RzD"
},{
    name: "5",
    image: "https://www.picz.in.th/image/Pe1kRV"
},{
    name: "5",
    image: "https://www.picz.in.th/image/Pe136Q"
}];



function createGameBoard() {
    let gameboard = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = 'grid';

    

    for (let index = 0; index < 10; index++) {
        let item = document.createElement('div');
        item.className = 'item';
        let card = document.createElement('img');
        card.setAttribute('src','https://www.picz.in.th/image/Pe1BXE');
        card.setAttribute('id',index);
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
        cards[selectedCardOne].setAttribute('src','https://www.picz.in.th/image/Pe1hzN');
        cards[selectedCardTwo].setAttribute('src','https://www.picz.in.th/image/Pe1hzN');
        score = score+1;
        consoleMessage = 'คุณจับคู่หัวชาร์จได้ถูกต้อง'
    }else{
        cards[selectedCardOne].setAttribute('src','https://www.picz.in.th/image/Pe1BXE');
        cards[selectedCardTwo].setAttribute('src','https://www.picz.in.th/image/Pe1BXE');
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