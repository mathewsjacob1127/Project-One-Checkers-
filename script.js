document.getElementById('start-button').addEventListener('click',function() {
    document.getElementById('board').style.display = 'grid';
    console.log('Game Started!!');
});

let currentPlayer = 'playerOne'
let selectedCircle = nul;
let validCircleMoves = [];