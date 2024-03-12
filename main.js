


function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio).play();


    // && operador lógico que significa "e"
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

//referencias(constantes) nao são o mesmo que variáveis
const ListaDeTeclas = document.querySelectorAll('.tecla');

//contador++ = contador = contador + 1;
for (let contador = 0; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    //template string
    const idAudio = `#som_${instrumento}`

    //funcao anônima
    ListaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        // === assegura que o conteudo e o type sejam verificados
        // || (pipes) é um operador lógico que significa "ou"
        if (evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

