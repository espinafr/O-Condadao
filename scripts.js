const destinos = ['Ser preso com erva de gato', 'Ser atropelado por um carro de boi', 'Casar com bluezão', 'Virar um sapo', 'Reencarnar durante a dinastia Shang', 'Engasgar com farelo de pão', 'Comido por sapos voadores', 'Odlinor te mata com vacina soviética', 'Morte por bate o dedin do pé', 'Um piano cai no seu cocoroco', 'Oinuj consumiu sua alma', 'Inada cai em você', 'Morto por feministas ateas contra o aborto', 'Morrer engasgado com saliva', 'Diabetes', 'Virar asmático', 'Lixo tóxico da sua vizinha entra na sua casa', 'Você não ganhou a picanha que o lula falou', 'Ficar sem água por anos', 'Obesidade mórbida', 'Infarto no seu casamento','Doces te matam', 'Você não vive sem K9', 'Alergia à grama', 'Alergia à madeira e plástico', 'Abóboras mataram sua familia', 'Pesadelos todos os dias com Bluezão', 'Morrer afogado lentamente'];
// São todos os destinos possíveis na divinação

document.addEventListener('DOMContentLoaded', function() { // Quando o evento 'DOMContentLoaded' acontecer, o código vai ser executado
    let fontes = document.getElementsByClassName("Fontes"); // Pega todos os elementos com a classe Fontes
    for (let indice = 0; indice < fontes.length; indice++) { // Loopa entre todos os elementos da let fontes
        fontes[indice].addEventListener("mouseover", function(){ // Quando o mouse estiver por cima de um dos elementos da let fontes
            PopUp(this); // Chama a função PopUp, mandando de parâmetro o elemento que o mouse está em cima (através do 'this')
        });
        fontes[indice].addEventListener("mouseout", function(){ // Quando o mouse sair de cima de um dos elementos da let fontes
            RemovePop(); // Chama a função RemovePop
        });
    }
});

function PopUp(element) { // O parâmetro da função é algum elemento dentro do código
    let coords = element.getBoundingClientRect();  // Função que pega o tamanho do elemento e sua posição relativa ao viewport (usaremos somente a posição)
    let x_pos = coords.left; // Chama de x_pos a distância do elemento até a esquerda do viewport
    let y_pos = coords.top; // Chama de y_pos a distância do elemento até o topo do viewport

    let info = document.getElementById('info'); // Referencia o elemento com o ID 'info'
    info.textContent = element.getAttribute('data-details'); // O texto dentro do 'info', será o mesmo que o do atributo 'data-details' do elemento do parâmetro da função
    info.style.left = (x_pos+10)+'px'; // Adiciona mais 10 à x_pos e os converto para pixeis
    info.style.top = (y_pos+15)+'px';  // Adiciona mais 10 à x_pos e os converto para pixeis
    info.style.visibility = "visible"; // Altera o css "visibility" para "visible", assim tornando o elemento 'info' visivel
}

function RemovePop() {
    let info = document.getElementById('info'); // Referencia o elemento com o ID 'info'
    info.style.visibility = "hidden"; // Altera o css "visibility" para "hidden", assim tornando o elemento 'info' invisível
}

function destino() {
    let risada = document.getElementById("risadaAudio"); // Referencia o elemento com o ID 'risadaAudio'
    let destinoTexto = document.getElementById("destino"); // Referencia o elemento com o ID 'destino'

    destinoTexto.textContent = destinos[Math.floor(Math.random()*destinos.length)];  // O texto dentro do 'destino', será algo aleatório dentro da array 'destinos'
    // Math.random fornece algum valor entre 0 e 1, isso é multiplicado pelo tamanho da array e depois o Math.floor retira os valores após a vírgula
    risada.play(); // Reproduz o áudio
}

function musicButton(buttonId, audioId) { // Os parâmetros da função são dos ids de elementos
    let button = document.getElementById(buttonId); // Referencia o elemento com o ID recebido no parâmetro
    let isMuted = button.getAttribute('data-muted'); // Pega o atributo 'data-muted' do elemento 'button'

    if (muteAudio(audioId)) { // Se a função muteAudio retornar verdadeiro, executa o código
        if (isMuted === 'false') { // Se o parâmetro isMuted for 'false', então faça
            button.setAttribute('data-muted', "true"); // Muda o parâmetro 'data-muted' para 'true'
            button.setAttribute('src', 'imagens/mutespeaker.png'); // Muda a imagem do 'button'
        } else { // Caso contrário
            button.setAttribute('data-muted', "false");  // Muda o parâmetro 'data-muted' para 'true'
            button.setAttribute('src', 'imagens/speaker.png');  // Muda a imagem do 'button'
        }
    }
}

function muteAudio(id) { // O parâmetro é o id do áudio
    let musica = document.getElementById(id); // Referencia o áudio pelo parâmetro dado
    let isMuted = musica.muted; // Se o áudio está mutado ou não

    try { // Tenta executar o seguinte código (isso foi necessário devido à complicações com a reprodução de áudio em alguns navegadores)
        musica.currentTime = 0; // Volta para o início da música
        if (isMuted === false) { // Se o áudio estiver mutado, faça
            musica.pause(); // Pausa o áudio
            musica.muted = true; // Muta o áudio
        } else { // Caso contrário
            musica.muted = false; // Desmuta o áudio
            musica.play(); // Reproduz o áudio
        }
        return true // Retorna verdadeiro
    } catch (err) { // Caso dê algum erro...
        return false // Retorna falso
    }
}