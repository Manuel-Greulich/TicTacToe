let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id){

    if(!fields[id] && !gameOver) {
        // if else abfrage, abwechselnd werte speichern 'circle' 'cross',
        if (currentShape == 'cross') {   // wenn currentshape cross ist, was es ist, weil es fest in der variabelen ist
            currentShape = 'circle';    // dann push mir circle in mein array
            document.getElementById('player-one').classList.add('player-inactive');
            document.getElementById('player-two').classList.remove('player-inactive');
        } else {
            currentShape = 'cross'; // ansonsten push mir cross in das array
            document.getElementById('player-one').classList.remove('player-inactive');
            document.getElementById('player-two').classList.add('player-inactive');
        }

        fields[id] = currentShape
        console.log(fields);
        draw();
        CheckForWin();
    }    
}



function draw(){
    for (let i = 0; i < fields.length; i++) {
        if(fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');  // d none wird weg genommen und circle wird angezeigt
        }

        if(fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none'); // d none wird weg genommen und cross wird angezeigt
        }
    }
}

function restart(){
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-button').classList.add('d-none');

    for(let i=0; i < 8; i++){
        document.getElementById('line-' + i).classList.add('d-none');
    }

    for(let i = 0; i < 9; i++) {
    document.getElementById('circle-' + i).classList.add('d-none');
    document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function CheckForWin(){
    let winner;

    // First Row  horizontal// 

    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0])  {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
        document.getElementById('line-0').classList.remove('d-none');
    }

    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        document.getElementById('line-1').classList.remove('d-none');
    }

    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        document.getElementById('line-2').classList.remove('d-none');
    }

    // vertikal //

    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-3').classList.remove('d-none');
    }

    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-4').classList.remove('d-none');
    }

    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-5').classList.remove('d-none');
    }

    // quer balken //

    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1.2)';
        document.getElementById('line-6').classList.remove('d-none');
    }

    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.2)';
        document.getElementById('line-7').classList.remove('d-none');
    }
    
    if(winner){
    console.log('GEWONNEN:', winner);
    gameOver = true;
    setTimeout(function() {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('restart-button').classList.remove('d-none');
    }, 1000);
    }
}