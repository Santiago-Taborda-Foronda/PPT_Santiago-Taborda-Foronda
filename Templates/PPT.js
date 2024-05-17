const battleSection = document.getElementById('campo-batalla');
const msjBattle = document.getElementById('msj-batalla');
const imgAttackPlayer = document.getElementById('img-ataque-jugador');
const imgAttackPc = document.getElementById('img-ataque-pc');
const btnRock = document.getElementById('btn-piedra');
const btnPaper = document.getElementById('btn-papel');
const btnScissors = document.getElementById('btn-tijeras');

let playerOption;
let opcionPc;
let imgPlayer;
let imgPc;

let victoryPlayer = 0;
let victoryPc = 0;

const images = [
    {
        name: "Piedra",
        url: "assets/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "assets/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "assets/Tijeras.PNG" 
    }
];

function start(){
    battleSection.style.display = 'none';
};

btnRock.addEventListener('click', function(){
    playerOption = "Piedra";
    opPc();
});

btnPaper.addEventListener('click', function(){
    playerOption = "Papel";
    opPc();
});

btnScissors.addEventListener('click', function(){
    playerOption = "Tijeras";
    opPc();
})

function opPc(){
    var aleaorio = nRandom();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    battle();
};

function battle(){
    if(playerOption == opcionPc){
        msjBattle.innerHTML = "Empate";
    }else if(playerOption == "Piedra" && opcionPc == "Tijeras" ||
             playerOption == "Papel" && opcionPc == "Piedra" ||
             playerOption == "Tijeras" && opcionPc == "Papel"){
        msjBattle.innerHTML = "Ganaste!";
        victoryPlayer++;
    }else{
        msjBattle.innerHTML = "Perdiste";
        victoryPc++;
    };

    verifyWinner();
    addImagenes();
}

function verifyWinner() {
    if (victoryPlayer === 3) {
        alert("el usuario gano");
        askContinue("jugador");
    } else if (victoryPc === 3) {
        alert("El sistema gano");
        askContinue("sistema");
    }
}

function askContinue(ganador) {
    let continuar = confirm(`El ${ganador} ganó el juego. ¿Quieres seguir jugando?`);
    if (continuar) {
        resetGame();
    } else {
        msjBattle.innerHTML = "Juego terminado. Recarga la página para jugar de nuevo.";
    }
}

function resetGame() {
    victoryPlayer = 0;
    victoryPc = 0;
    msjBattle.innerHTML = "";
    battleSection.style.display = 'none';
}

function nRandom(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function addImagenes(){
    for(let i=0;i<images.length;i++){
        if(playerOption == images[i].name){
            imgPlayer = images[i].url;
            var inserta = `<img class="img-batalla" src=${imgPlayer} alt="">`;
            imgAttackPlayer.innerHTML = inserta;
        };
        
        if(opcionPc == images[i].name){
            imgPc = images[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAttackPc.innerHTML = inserta;
        };
    };

    battleSection.style.display = 'flex';
};

window.addEventListener('load', start);