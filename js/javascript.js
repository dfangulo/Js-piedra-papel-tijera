//Simple juego de piedra papel o tijera entre dos jugadores:

const jugador1 = new Player(document.getElementById('inpJugador1').value);
const jugador2 = new Player(document.getElementById('inpJugador2').value);
imgRender('imgJugador1', jugador1.getObjeto());
imgRender('imgJugador2', jugador2.getObjeto());
let play1Wins = 0;
let play2Wins = 0;
let turnos = 0;
let empates = 0;
let nameinput1 = document.getElementById('inpJugador1');
let nameinput2 = document.getElementById('inpJugador2');

nameinput1.addEventListener('input', liberarBoton)
nameinput2.addEventListener('input', liberarBoton)

function liberarBoton() {
    if (nameinput1.value.length > 3 && nameinput2.value.length > 3) {
        //document.getElementById('play').style.color = "green";
        document.getElementById("play").className = "btn col-4 btn-success";
        document.getElementById('play').disabled = false;
    } else {
        document.getElementById('play').disabled = true;
    }
}


function play() {
    //validar nombres
    if (nameinput1.value !== nameinput2.value) {
        const jugador1 = new Player(document.getElementById('inpJugador1').value);
        const jugador2 = new Player(document.getElementById('inpJugador2').value);
        // pintar al ganador
        turnos += 1;
        render(winnner(jugador1, jugador2));
    }

}

function winnner(play1, play2) {
    let ganador;
    let color;
    const objJugador1 = play1.getObjeto();
    const objJugador2 = play2.getObjeto();
    const nombreJugador1 = play1.getName();
    const nombreJugador2 = play2.getName();
    if (objJugador1 === objJugador2) {
        ganador = 'Empate!'
        empates += 1;
        imgRender('imgJugador1', objJugador1);
        imgRender('imgJugador2', objJugador2);
        color = "red";
    } else if (objJugador1 == 'piedra' && objJugador2 == 'tijeras' || objJugador1 == 'tijeras' && objJugador2 == 'papel' || objJugador1 == 'papel' && objJugador2 == 'piedra') {
        ganador = nombreJugador1;
        play1Wins += 1;
        imgRender('imgJugador1', objJugador1);
        imgRender('imgJugador2', objJugador2);
        color = "Blue";
    } else {
        ganador = nombreJugador2;
        play2Wins += 1;
        imgRender('imgJugador2', objJugador2);
        imgRender('imgJugador1', objJugador1);
        color = "green";
    }
    let players = `{"nombreJugador1":"${nombreJugador1}", "objJugador1" : "${objJugador1}", "ganados1":"${play1Wins}", "nombreJugador2":"${nombreJugador2}","objJugador2" : "${objJugador2}", "ganados2":"${play2Wins}", "ganador": "${ganador}"}`;
    document.getElementById('winner').style.color = color;
    return players;
}

function render(players) {
    const objPlayers = JSON.parse(players);
    //console.log (objPlayers);
    const turnoshtmlth = document.getElementById('thTurnos')
    turnoshtmlth.innerText = 'TURNOS';
    const ganadorhtmlth = document.getElementById('thGanador')
    ganadorhtmlth.innerText = 'GANADOR';
    const empateshtmlth = document.getElementById('thEmpates')
    empateshtmlth.innerText = 'EMPATES';

    //crear las salidas de turnos y empates en la tabla
    const ganadorhtml = document.getElementById('winner')
    ganadorhtml.innerText = objPlayers.ganador;
    const turnoshtml = document.getElementById('turnos')
    turnoshtml.innerText = empates + parseInt(objPlayers.ganados1) + parseInt(objPlayers.ganados2);
    const empateshtml = document.getElementById('empates')
    empateshtml.innerText = empates;

    //etiqueta de los jugadores
    const tagNameJugador1html = document.getElementById('tagNameJugador1')
    tagNameJugador1html.innerText = objPlayers.nombreJugador1;
    const tagNameJugador2html = document.getElementById('tagNameJugador2')
    tagNameJugador2html.innerText = objPlayers.nombreJugador2;

    //numero de ganados por jugador
    const ganadosJugador1html = document.getElementById('ganadosJugador1')
    ganadosJugador1html.innerText = objPlayers.ganados1;
    const ganadosJugador2html = document.getElementById('ganadosJugador2')
    ganadosJugador2html.innerText = objPlayers.ganados2;

    //porcentajes
    let porcentajeJugador1 = ((objPlayers.ganados1 / turnos) * 100).toFixed(2) + '%';
    let porcentajeJugador2 = ((objPlayers.ganados2 / turnos) * 100).toFixed(2) + '%';
    const porcentajeJugador1html = document.getElementById('porcentajeJugador1')
    porcentajeJugador1html.innerText = porcentajeJugador1;
    const porcentajeJugador2html = document.getElementById('porcentajeJugador2')
    porcentajeJugador2html.innerText = porcentajeJugador2;
}

function imgRender(jugador, objeto){
    const id = jugador;
    const img = `./img/${objeto}.png`;

    const postImagen = document.getElementById(id);
    try {
        postImagen.src = img;
        console.log(`ID:${id}  Objeto:${img}`);
     } catch (err ){
        console.log(err());
     }
    //document.getElementById(id).innerText = img;
}