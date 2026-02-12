/* ================= GAME LOGIC (FIXED) ================= */

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
    } else {
        document.getElementById('chessGame').classList.remove('hidden');
        setTimeout(initChess, 100);
    }
}

// --- Tic Tac Toe Engine ---
let tttBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function initTTT() {
    tttBoard = ['', '', '', '', '', '', '', '', '']; 
    gameActive = true;
    document.getElementById('tttStatus').innerText = "Your Turn (X)";
    renderTTT();
}

function renderTTT() {
    const boardDiv = document.getElementById('tttBoard');
    // CSS class 'cell' ab shop-style.css mein defined hai
    boardDiv.innerHTML = tttBoard.map((cell, i) => 
        `<div class="cell" onclick="playerMove(${i})" style="color: ${cell === 'X' ? '#25D366' : '#FF0000'}">${cell}</div>`
    ).join('');
}

function playerMove(i) {
    if(tttBoard[i] !== '' || !gameActive) return;
    tttBoard[i] = 'X'; 
    renderTTT();
    if(checkWin('X')) { endTTT("🎉 YOU WON!"); return; }
    if(!tttBoard.includes('')) { endTTT("⚠️ DRAW!"); return; }
    
    document.getElementById('tttStatus').innerText = "Thinking...";
    setTimeout(computerMove, 500);
}

function computerMove() {
    if(!gameActive) return;
    let empty = tttBoard.map((v, i) => v === '' ? i : null).filter(v => v !== null);
    if(empty.length > 0) {
        // Simple AI: Random Move
        let move = empty[Math.floor(Math.random() * empty.length)];
        tttBoard[move] = 'O';
        renderTTT();
        if(checkWin('O')) endTTT("🤖 COMPUTER WON!");
        else document.getElementById('tttStatus').innerText = "Your Turn (X)";
    }
}

function checkWin(p) {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return wins.some(c => tttBoard[c[0]] === p && tttBoard[c[1]] === p && tttBoard[c[2]] === p);
}

function endTTT(msg) { 
    gameActive = false; 
    document.getElementById('tttStatus').innerText = msg; 
}

// --- Chess Engine ---
var board = null; var game = new Chess();
function initChess() {
    game = new Chess();
    var config = {
        draggable: true, position: 'start',
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        onDrop: (source, target) => {
            var move = game.move({ from: source, to: target, promotion: 'q' });
            if (move === null) return 'snapback';
            window.setTimeout(() => {
                var moves = game.moves();
                if (moves.length > 0) {
                    game.move(moves[Math.floor(Math.random() * moves.length)]);
                    board.position(game.fen());
                }
            }, 250);
        }
    };
    board = Chessboard('myBoard', config);
}
