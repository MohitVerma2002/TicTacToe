console.log("Welcome to Tic Tac Toe");
let audioturn = new Audio("beep.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}


// function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
wins.forEach(e =>{
    if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText  && boxtext[e[0]].innerText !== ''){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        gameover  = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
        gameOver.play();
    }
})
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// listener for reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    
    turn="X";
    gameover  = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
       
})