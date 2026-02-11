/* ================= GAME LOGIC FILE ================= */

// --- 1. MODAL & MENU LOGIC ---
function toggleGameModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden')) {
        showGameMenu();
    }
}

function showGameMenu() {
    document.getElementById('gameMenu').classList.remove('hidden');
    document.getElementById('tttGame').classList.add('hidden');
    document.getElementById('chessGame').classList.add('hidden');
}

function startGame(gameType) {
    document.getElementById('gameMenu').classList.add('hidden');
    
    if(gameType === 'ttt') {
        document.getElementById('tttGame').classList.remove('hidden');
        initTTT();
    } else if(gameType === 'chess') {
        document.getElementById('chessGame').classList.remove('hidden');
        // Slight delay to ensure board renders correctly
        setTimeout(initChess, 100);
    }
}

// --- 2. TIC TAC TOE ENGINE ---
let tttBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function initTTT() {
    tttBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    const status = document.getElementById('tttStatus');
    if(status) status.innerText = "Your Turn (X)";
    renderTTT();
}

function renderTTT() {
    const boardDiv = document.getElementById('tttBoard');
    if(!boardDiv) return;
    
    boardDiv.innerHTML = '';
    tttBoard.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.className = `cell ${cell === 'X' ? 'x' : 'o'}`;
        cellDiv.innerText = cell;
        cellDiv.onclick = () => playerMove(index);
        boardDiv.appendChild(cellDiv);
    });
}

function playerMove(index) {
    if(tttBoard[index] !== '' || !gameActive) return;
    
    tttBoard[index] = 'X';
    renderTTT();
    
    if(checkWin('X')) { endTTT("You Won! 🎉"); return; }
    if(!tttBoard.includes('')) { endTTT("Draw! 🤝"); return; }
    
    document.getElementById('tttStatus').innerText = "Computer Thinking...";
    setTimeout(computerMove, 600);
}

function computerMove() {
    if(!gameActive) return;
    
    // Logic: Find empty spots and pick one randomly
    let emptyIndices = [];
    tttBoard.forEach((val, idx) => {
        if(val === '') emptyIndices.push(idx);
    });

    if(emptyIndices.length > 0) {
        let randomIdx = Math.floor(Math.random() * emptyIndices.length);
        let move = emptyIndices[randomIdx];
        
        tttBoard[move] = 'O';
        renderTTT();
        
        if(checkWin('O')) { endTTT("Computer Won! 🤖"); }
        else if(!tttBoard.includes('')) { endTTT("Draw! 🤝"); }
        else { document.getElementById('tttStatus').innerText = "Your Turn (X)"; }
    }
}

function checkWin(player) {
    const wins = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Cols
        [0,4,8], [2,4,6]           // Diagonals
    ];
    return wins.some(c => tttBoard[c[0]] === player && tttBoard[c[1]] === player && tttBoard[c[2]] === player);
}

function endTTT(msg) {
    gameActive = false;
    document.getElementById('tttStatus').innerText = msg;
}

// --- 3. CHESS ENGINE (Using Chess.js & Chessboard.js) ---
var board = null;
var game = new Chess();

function onDragStart (source, piece, position, orientation) {
    // Do not pick up pieces if the game is over
    if (game.game_over()) return false;

    // Only allow user to move White pieces
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }
}

function makeRandomMove () {
    var possibleMoves = game.moves();

    // Game over?
    if (possibleMoves.length === 0) return;

    var randomIdx = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIdx]);
    board.position(game.fen());
}

function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return 'snapback';

    // make random legal move for black
    window.setTimeout(makeRandomMove, 250);
}

function onSnapEnd () {
    board.position(game.fen());
}

function initChess() {
    // Reset game logic
    game = new Chess();
    
    var config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd,
        showNotation: false // Mobile pe clean dikhne ke liye
    }
    
    // Destroy old board instance if exists to prevent errors
    if(board && typeof board.destroy === 'function') {
        // board.destroy() might not exist in all versions, 
        // but re-initializing usually works fine.
    }
    
    board = Chessboard('myBoard', config);
    
    // Mobile Resize Fix
    setTimeout(() => { 
        window.dispatchEvent(new Event('resize'));
        board.resize();
    }, 200);
}
