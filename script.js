let pontos = 0;

function crescer(valor){

    pontos += valor;

    let arvore = document.getElementById("arvore");
    let mensagem = document.getElementById("mensagem");

    if(pontos <= 2){
        arvore.innerHTML = "🌱";
        mensagem.innerHTML = "Sua muda começou a crescer!";
    }

    else if(pontos <= 5){
        arvore.innerHTML = "🌿";
        mensagem.innerHTML = "A árvore está ficando forte!";
    }

    else if(pontos <= 8){
        arvore.innerHTML = "🌳";
        mensagem.innerHTML = "Parabéns! Sua árvore está saudável!";
    }

    else{
        arvore.innerHTML = "🌲";
        mensagem.innerHTML = "🏆 Você construiu um futuro sustentável!";
    }
}