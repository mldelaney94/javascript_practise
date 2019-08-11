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

    document.getElementById("row-8-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-a").innerText, "row-8-col-a")}, false);
    document.getElementById("row-8-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-b").innerText, "row-8-col-b")}, false);
    document.getElementById("row-8-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-c").innerText, "row-8-col-c")}, false);
    document.getElementById("row-8-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-d").innerText, "row-8-col-d")}, false);
    document.getElementById("row-8-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-e").innerText, "row-8-col-e")}, false);
    document.getElementById("row-8-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-f").innerText, "row-8-col-f")}, false);
    document.getElementById("row-8-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-g").innerText, "row-8-col-g")}, false);
    document.getElementById("row-8-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-8-col-h").innerText, "row-8-col-h")}, false);
    document.getElementById("row-7-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-a").innerText, "row-7-col-a")}, false);
    document.getElementById("row-7-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-b").innerText, "row-7-col-b")}, false);
    document.getElementById("row-7-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-c").innerText, "row-7-col-c")}, false);
    document.getElementById("row-7-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-d").innerText, "row-7-col-d")}, false);
    document.getElementById("row-7-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-e").innerText, "row-7-col-e")}, false);
    document.getElementById("row-7-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-f").innerText, "row-7-col-f")}, false);
    document.getElementById("row-7-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-g").innerText, "row-7-col-g")}, false);
    document.getElementById("row-7-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-7-col-h").innerText, "row-7-col-h")}, false);
    document.getElementById("row-6-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-a").innerText, "row-6-col-a")}, false);
    document.getElementById("row-6-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-b").innerText, "row-6-col-b")}, false);
    document.getElementById("row-6-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-c").innerText, "row-6-col-c")}, false);
    document.getElementById("row-6-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-d").innerText, "row-6-col-d")}, false);
    document.getElementById("row-6-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-e").innerText, "row-6-col-e")}, false);
    document.getElementById("row-6-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-f").innerText, "row-6-col-f")}, false);
    document.getElementById("row-6-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-g").innerText, "row-6-col-g")}, false);
    document.getElementById("row-6-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-6-col-h").innerText, "row-6-col-h")}, false);
    document.getElementById("row-5-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-a").innerText, "row-5-col-a")}, false);
    document.getElementById("row-5-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-b").innerText, "row-5-col-b")}, false);
    document.getElementById("row-5-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-c").innerText, "row-5-col-c")}, false);
    document.getElementById("row-5-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-d").innerText, "row-5-col-d")}, false);
    document.getElementById("row-5-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-e").innerText, "row-5-col-e")}, false);
    document.getElementById("row-5-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-f").innerText, "row-5-col-f")}, false);
    document.getElementById("row-5-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-g").innerText, "row-5-col-g")}, false);
    document.getElementById("row-5-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-5-col-h").innerText, "row-5-col-h")}, false);
    document.getElementById("row-4-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-a").innerText, "row-4-col-a")}, false);
    document.getElementById("row-4-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-b").innerText, "row-4-col-b")}, false);
    document.getElementById("row-4-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-c").innerText, "row-4-col-c")}, false);
    document.getElementById("row-4-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-d").innerText, "row-4-col-d")}, false);
    document.getElementById("row-4-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-e").innerText, "row-4-col-e")}, false);
    document.getElementById("row-4-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-f").innerText, "row-4-col-f")}, false);
    document.getElementById("row-4-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-g").innerText, "row-4-col-g")}, false);
    document.getElementById("row-4-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-4-col-h").innerText, "row-4-col-h")}, false);
    document.getElementById("row-3-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-a").innerText, "row-3-col-a")}, false);
    document.getElementById("row-3-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-b").innerText, "row-3-col-b")}, false);
    document.getElementById("row-3-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-c").innerText, "row-3-col-c")}, false);
    document.getElementById("row-3-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-d").innerText, "row-3-col-d")}, false);
    document.getElementById("row-3-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-e").innerText, "row-3-col-e")}, false);
    document.getElementById("row-3-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-f").innerText, "row-3-col-f")}, false);
    document.getElementById("row-3-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-g").innerText, "row-3-col-g")}, false);
    document.getElementById("row-3-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-3-col-h").innerText, "row-3-col-h")}, false);
    document.getElementById("row-2-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-a").innerText, "row-2-col-a")}, false);
    document.getElementById("row-2-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-b").innerText, "row-2-col-b")}, false);
    document.getElementById("row-2-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-c").innerText, "row-2-col-c")}, false);
    document.getElementById("row-2-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-d").innerText, "row-2-col-d")}, false);
    document.getElementById("row-2-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-e").innerText, "row-2-col-e")}, false);
    document.getElementById("row-2-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-f").innerText, "row-2-col-f")}, false);
    document.getElementById("row-2-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-g").innerText, "row-2-col-g")}, false);
    document.getElementById("row-2-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-2-col-h").innerText, "row-2-col-h")}, false);
    document.getElementById("row-1-col-a").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-a").innerText, "row-1-col-a")}, false);
    document.getElementById("row-1-col-b").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-b").innerText, "row-1-col-b")}, false);
    document.getElementById("row-1-col-c").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-c").innerText, "row-1-col-c")}, false);
    document.getElementById("row-1-col-d").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-d").innerText, "row-1-col-d")}, false);
    document.getElementById("row-1-col-e").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-e").innerText, "row-1-col-e")}, false);
    document.getElementById("row-1-col-f").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-f").innerText, "row-1-col-f")}, false);
    document.getElementById("row-1-col-g").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-g").innerText, "row-1-col-g")}, false);
    document.getElementById("row-1-col-h").addEventListener("click", function() {clickHandler(document.getElementById("row-1-col-h").innerText, "row-1-col-h")}, false);

    document.getElementById("row-8-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-a").innerText, "row-8-col-a")}, false);
    document.getElementById("row-8-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-b").innerText, "row-8-col-b")}, false);
    document.getElementById("row-8-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-c").innerText, "row-8-col-c")}, false);
    document.getElementById("row-8-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-d").innerText, "row-8-col-d")}, false);
    document.getElementById("row-8-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-e").innerText, "row-8-col-e")}, false);
    document.getElementById("row-8-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-f").innerText, "row-8-col-f")}, false);
    document.getElementById("row-8-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-g").innerText, "row-8-col-g")}, false);
    document.getElementById("row-8-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-8-col-h").innerText, "row-8-col-h")}, false);
    document.getElementById("row-7-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-a").innerText, "row-7-col-a")}, false);
    document.getElementById("row-7-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-b").innerText, "row-7-col-b")}, false);
    document.getElementById("row-7-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-c").innerText, "row-7-col-c")}, false);
    document.getElementById("row-7-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-d").innerText, "row-7-col-d")}, false);
    document.getElementById("row-7-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-e").innerText, "row-7-col-e")}, false);
    document.getElementById("row-7-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-f").innerText, "row-7-col-f")}, false);
    document.getElementById("row-7-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-g").innerText, "row-7-col-g")}, false);
    document.getElementById("row-7-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-7-col-h").innerText, "row-7-col-h")}, false);
    document.getElementById("row-6-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-a").innerText, "row-6-col-a")}, false);
    document.getElementById("row-6-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-b").innerText, "row-6-col-b")}, false);
    document.getElementById("row-6-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-c").innerText, "row-6-col-c")}, false);
    document.getElementById("row-6-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-d").innerText, "row-6-col-d")}, false);
    document.getElementById("row-6-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-e").innerText, "row-6-col-e")}, false);
    document.getElementById("row-6-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-f").innerText, "row-6-col-f")}, false);
    document.getElementById("row-6-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-g").innerText, "row-6-col-g")}, false);
    document.getElementById("row-6-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-6-col-h").innerText, "row-6-col-h")}, false);
    document.getElementById("row-5-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-a").innerText, "row-5-col-a")}, false);
    document.getElementById("row-5-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-b").innerText, "row-5-col-b")}, false);
    document.getElementById("row-5-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-c").innerText, "row-5-col-c")}, false);
    document.getElementById("row-5-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-d").innerText, "row-5-col-d")}, false);
    document.getElementById("row-5-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-e").innerText, "row-5-col-e")}, false);
    document.getElementById("row-5-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-f").innerText, "row-5-col-f")}, false);
    document.getElementById("row-5-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-g").innerText, "row-5-col-g")}, false);
    document.getElementById("row-5-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-5-col-h").innerText, "row-5-col-h")}, false);
    document.getElementById("row-4-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-a").innerText, "row-4-col-a")}, false);
    document.getElementById("row-4-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-b").innerText, "row-4-col-b")}, false);
    document.getElementById("row-4-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-c").innerText, "row-4-col-c")}, false);
    document.getElementById("row-4-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-d").innerText, "row-4-col-d")}, false);
    document.getElementById("row-4-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-e").innerText, "row-4-col-e")}, false);
    document.getElementById("row-4-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-f").innerText, "row-4-col-f")}, false);
    document.getElementById("row-4-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-g").innerText, "row-4-col-g")}, false);
    document.getElementById("row-4-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-4-col-h").innerText, "row-4-col-h")}, false);
    document.getElementById("row-3-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-a").innerText, "row-3-col-a")}, false);
    document.getElementById("row-3-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-b").innerText, "row-3-col-b")}, false);
    document.getElementById("row-3-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-c").innerText, "row-3-col-c")}, false);
    document.getElementById("row-3-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-d").innerText, "row-3-col-d")}, false);
    document.getElementById("row-3-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-e").innerText, "row-3-col-e")}, false);
    document.getElementById("row-3-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-f").innerText, "row-3-col-f")}, false);
    document.getElementById("row-3-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-g").innerText, "row-3-col-g")}, false);
    document.getElementById("row-3-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-3-col-h").innerText, "row-3-col-h")}, false);
    document.getElementById("row-2-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-a").innerText, "row-2-col-a")}, false);
    document.getElementById("row-2-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-b").innerText, "row-2-col-b")}, false);
    document.getElementById("row-2-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-c").innerText, "row-2-col-c")}, false);
    document.getElementById("row-2-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-d").innerText, "row-2-col-d")}, false);
    document.getElementById("row-2-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-e").innerText, "row-2-col-e")}, false);
    document.getElementById("row-2-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-f").innerText, "row-2-col-f")}, false);
    document.getElementById("row-2-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-g").innerText, "row-2-col-g")}, false);
    document.getElementById("row-2-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-2-col-h").innerText, "row-2-col-h")}, false);
    document.getElementById("row-1-col-a").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-a").innerText, "row-1-col-a")}, false);
    document.getElementById("row-1-col-b").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-b").innerText, "row-1-col-b")}, false);
    document.getElementById("row-1-col-c").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-c").innerText, "row-1-col-c")}, false);
    document.getElementById("row-1-col-d").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-d").innerText, "row-1-col-d")}, false);
    document.getElementById("row-1-col-e").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-e").innerText, "row-1-col-e")}, false);
    document.getElementById("row-1-col-f").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-f").innerText, "row-1-col-f")}, false);
    document.getElementById("row-1-col-g").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-g").innerText, "row-1-col-g")}, false);
    document.getElementById("row-1-col-h").addEventListener("mouseover", function() {hoverHandler(document.getElementById("row-1-col-h").innerText, "row-1-col-h")}, false);
}

let holdingPiece = false;
let heldPiece = "";
function clickHandler(piece, pieceLoc) {
    //if holding a piece, then we want to place it
    //if not, then we want to pick one up, which we cannot do if piece == ""
    if (holdingPiece) {
        //here we want to do all the complicated shenanigans
        document.getElementById(pieceLoc).innerText = heldPiece;
        holdingPiece = false;
    } else if (piece == "") {
        return;
    } else if (holdingPiece == false) {
        document.getElementById(pieceLoc).innerText = "";
        heldPiece = piece;
        holdingPiece = true;
    } 
}

function hoverHandler (piece, pieceLoc) {
    if (piece != "") {
        document.getElementById(pieceLoc).style = "cursor: pointer";
    } else {
        document.getElementById(pieceLoc).style = "cursor: auto";
    }
}