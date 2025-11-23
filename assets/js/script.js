/**
 1 = Pedra
 2 = Papel
 3 = Tesoura
 */

//FUNÇÃO QUE CONTÉM TODA A LOGICA DO JOGO:

function gameLogic(){

    let jogador_jogada;
    let maquina_jogada = Math.round(Math.random() * (3 - 1) + 1);

    jogador_jogada = parseInt(prompt("Escolha um número e faça a sua jogada:"));

    if(jogador_jogada == 1 && maquina_jogada == 3){
        alert("O Jogador venceu usando Pedra contra a Máquina que usou Tesoura.");
        console.log("O Jogador venceu usando Pedra contra a Máquina que usou Tesoura.");
    } else if(maquina_jogada == 1 && jogador_jogada == 3){
        alert("A Máquina venceu usando Pedra contra o Jogador que usou Tesoura.");
        console.log("A Máquina venceu usando Pedra contra o Jogador que usou Tesoura.");
    } else if(jogador_jogada == 1 && maquina_jogada == 1){
        alert("Empate. Pedra contra Pedra!");
        console.log("Empate. Pedra contra Pedra!");
    } else if(jogador_jogada == 3 && maquina_jogada == 3){
        alert("Empate. Tesoura contra Tesoura!");
        console.log("Empate. Tesoura contra Tesoura!");
    } else if(jogador_jogada == 2 && maquina_jogada == 1){
        alert("O Jogador venceu usando Papel contra a Máquina que usou Pedra.");
        console.log("O Jogador venceu usando Papel contra a Máquina que usou Pedra.");
    } else if(maquina_jogada == 2 && jogador_jogada == 1){
        alert("A Máquina venceu usando Papel contra o Jogador que usou Pedra.");
        console.log("A Máquina venceu usando Papel contra o Jogador que usou Pedra.");
    } else if(jogador_jogada == 2 && maquina_jogada ==2){
        alert("Empate. Papel contra Papel!");
        console.log("Empate. Papel contra Papel!");
    } else if(jogador_jogada == 3 && maquina_jogada == 2){
        alert("O Jogador venceu usando Tesoura contra a Máquina que usou Papel.");
        console.log("O Jogador venceu usando Tesoura contra a Máquina que usou Papel.");
    } else if(maquina_jogada == 3 && jogador_jogada == 2){
        alert("A Máquina venceu usando Tesoura contra o Jogador que usou Papel.");
        console.log("A Máquina venceu usando Tesoura contra o Jogador que usou Papel.");
    } else {
        alert("Erro. Tente novamente.");
        console.log("Erro. Tente novamente.");
    }
}

//FUNÇÃO PRINCIPAL QUE CHAMA A LÓGICA E REPETE 3 VEZES (NUMERO DE CHANCES DO JOGADOR):

function jokenpoGame(){

    let chances = 1;

    while(chances <= 3){
        gameLogic();
        chances++
    }
}

