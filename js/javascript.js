//Simple juego de piedra papel o tijera entre dos jugadores:
const jugador1 = new Player('jugador1');
const jugador2 = new Player('jugador2');
let play1Wins = 0;
let play2Wins = 0;
let turnos = 1;
let empates = 0;
function play()
{
    render(winnner(jugador1.getObjeto(), jugador2.getObjeto()));
    turnos += 1;
}

function winnner(play1, play2){
    if (play1 === play2) {
        ganador = 'Empate!'
        if (turnos != 1) turnos -= 1;
        empates += 1;
    } else if (play1 == 'piedra' && play2 == 'tijeras' || play1 == 'tijeras' && play2 == 'papel' || play1 =='papel' && play2 == 'piedra') {
        ganador = 'Jugador 1';
        play1Wins += 1;

    } else {
        ganador = 'Jugador 2';
        play2Wins += 1;
    }
    const players = `{"jugador1": "${play1}", "ganados1":"${play1Wins}", "jugador2" : "${play2}", "ganados2":"${play2Wins}", "ganador": "${ganador}"}`;
    return players;
}

function render(players) 
{
    const objPlayers = JSON.parse(players);

    const ganadorhtml = document.getElementById('winner')
    ganadorhtml.innerText = objPlayers.ganador;

    const jugador1html = document.getElementById(jugador1.getName());
    jugador1html.innerText = 'Jugador 1 : ' + objPlayers.jugador1 + ' Ganados: ' + ((objPlayers.ganados1 / turnos) * 100).toFixed(2) + '%';

    const jugador2html = document.getElementById(jugador2.getName());
    jugador2html.innerText = 'Jugador 2 : ' + objPlayers.jugador2  + ' Ganados: ' + ((objPlayers.ganados2 / turnos) * 100).toFixed(2) + '%';

    //crear las salidas de turnos y empates
    const turnoshtml = document.getElementById('turnos')
    turnoshtml.innerText = turnos + empates;

    const empateshtml = document.getElementById('empates')
    empateshtml.innerText = empates;

}