let board = [];

for(var i = 0; i < 8; i++) {
    board[i] = [];
}

let whiteKing = '\u2654';
let whiteQueen = '\u2655';
let whiteRook = '\u2656';
let whiteBishop = '\u2657';
let whiteKnight = '\u2658';
let whitePawn = '\u2659';
let blackKing = '\u265A';
let blackQueen = '\u265B';
let blackRook = '\u265C';
let blackBishop = '\u265D';
let blackKnight = '\u265E';
let blackPawn = '\u265F';

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUpBoard);
} else {
    setUpBoard();
}

function setUpBoard() {
    document.getElementById("row-1-col-a").innerText = whiteRook;
    document.getElementById("row-1-col-b").innerText = whiteKnight;
    document.getElementById("row-1-col-c").innerText = whiteBishop;
    document.getElementById("row-1-col-d").innerText = whiteQueen;
    document.getElementById("row-1-col-e").innerText = whiteKing;
    document.getElementById("row-1-col-f").innerText = whiteBishop;
    document.getElementById("row-1-col-g").innerText = whiteKnight;
    document.getElementById("row-1-col-h").innerText = whiteRook;

    document.getElementById("row-2-col-a").innerText = whitePawn;   
    document.getElementById("row-2-col-b").innerText = whitePawn;
    document.getElementById("row-2-col-c").innerText = whitePawn;
    document.getElementById("row-2-col-d").innerText = whitePawn;    
    document.getElementById("row-2-col-e").innerText = whitePawn;   
    document.getElementById("row-2-col-f").innerText = whitePawn;
    document.getElementById("row-2-col-g").innerText = whitePawn;
    document.getElementById("row-2-col-h").innerText = whitePawn;

    document.getElementById("row-8-col-a").innerText = blackRook;
    document.getElementById("row-8-col-b").innerText = blackKnight;
    document.getElementById("row-8-col-c").innerText = blackBishop;
    document.getElementById("row-8-col-d").innerText = blackQueen;
    document.getElementById("row-8-col-e").innerText = blackKing;
    document.getElementById("row-8-col-f").innerText = blackBishop;
    document.getElementById("row-8-col-g").innerText = blackKnight;
    document.getElementById("row-8-col-h").innerText = blackRook;

    document.getElementById("row-7-col-a").innerText = blackPawn;   
    document.getElementById("row-7-col-b").innerText = blackPawn;
    document.getElementById("row-7-col-c").innerText = blackPawn;
    document.getElementById("row-7-col-d").innerText = blackPawn;    
    document.getElementById("row-7-col-e").innerText = blackPawn;   
    document.getElementById("row-7-col-f").innerText = blackPawn;
    document.getElementById("row-7-col-g").innerText = blackPawn;
    document.getElementById("row-7-col-h").innerText = blackPawn;
}

/*let whiteKing = '&#9812';
let whiteQueen = '&#9813;';
let whiteRook = '&#9814;';
let whiteBishop = '&#9815;';
let whiteKnight = '&#9816;';
let whitePawn = '&#9817;';
let blackKing = '&#9818;';
let blackQueen = '&#9819;';
let blackRook = '&#9820;';
let blackBishop = '&#9821;';
let blackKnight = '&#9822;';
let blackPawn = '&#9823;';*/