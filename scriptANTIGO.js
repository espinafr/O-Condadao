const destinos = ['Ser atropelado por um carro de boi', 'Casar com bluezão', 'Virar um sapo', 'Reencarnar durante a dinastia Shang', 'Engasgar com farelo de pão', 'Comido por sapos voadores', 'Odlinor te mata com vacina soviética', 'Morte por bate o dedin do pé', 'Um piano cai no seu cocoroco', 'Inada cai em você', 'Morto por feministas ateas contra o aborto', 'Morrer engasgado com saliva', 'Diabetes', 'Virar asmático', 'Lixo tóxico da sua vizinha entra na sua casa', 'Você não ganhou a picanha que o lula falou', 'Ficar sem água por anos', 'Obesidade mórbida', 'Infarto no seu casamento','Doces te matam', 'Você não vive sem K9', 'Alergia à grama', 'Alergia à madeira e plástico', 'Abóboras mataram sua familia', 'Pesadelos todos os dias com Bluezão', 'Morrer afogado lentamente'];
// São todos os destinos possíveis na divinação
const noticias = [
    {
        titulo: "CHAPÉUZINHO VERMELHO DESAPARECIDA",
        subtitulo: "Lobo Mau nega envolvimento - “Eu não tenho nada a ver! Nem gosto mais de mingau!”",
        noticia: [
                    "Nesta sexta-feira (13) foi registrado em boletim de ocorrência acerca do desaparecimento da Chapéuzinho Vermelho, vovózinha relata que está muito preocupada com o paradeiro de sua neta. “A minha hipoglicemia ta batendo palminha já.. Cadê você, óh minha chapéu?”",
                    "A polícia já reuniu forças e realizou investigações em um perseguidor da Chapéu, o Lobo Mau. O mesmo nega qualquer envolvimeneto: “Já bastava aquela ordem judicial para manter distância.. Naquele dia estava apenas indo comprar comida para meus filhos, eu estava na hora errada no lugar errado! [...]”",
                    "Segundo caçadores, o Lobo Mau apresentou várias divergências em seus relatos, e como medida de precaução, foi realizada a prisão preventiva do mesmo."
                ],
        image: "LoboMauSEMCULPA.jpg",
        fontes: "Investigações realizadas pelo O Condadão",
        autor: "Theos Morde O'Neis Viela",
        data: "16/05/1366"
    },
    {
        titulo: "Diga não ao pum de goblin!",
        subtitulo: "O efeito pode ser divertido à princípio, mas ao longo prazo pode destruir seu corpo...",
        noticia: [
                    "O recente aumento do uso de produtos a base do que é popularmente conhecido como “pum de goblin” tem também trazido dúvidas sobre a origem questionável dos químicos usados em sua composição.",
                    "Alguns usuários do produto relataram a aparição de pequenos homúnculos verdes em sua pele depois de algumas semanas de aplicarem o produto diariamente.",
                    "“Esse bicho esquisito fala coisas degradantes sobre minha esposa e isso têm nos irritado profundamente” relata uma das “vítimas” da propaganda do produto.",
                    "Ao ser questionada sobre a origem de seus produtos a Fede&Cheira CO. respondeu de uma forma curiosa: “nunca dissemos que não se tratava de fato de pum de goblin”.",
                    "Recusando-se a elaborar, a resposta foi negativa: a empresa agora enfrenta um processo por parte de seus ex-consumidores."
                ],
        fontes: "Doutor Dráuzeo varíola",
        autor: "Syr Renout from S. River",
        data: "15/05/1366"
    },
    {
        titulo: "Lei seca?!",
        subtitulo: "O uso indiscriminado do hidromel da poesia pode estar relacionado ao vício em cantar em público.",
        noticia: [
                    "Um dos últimos debates ocorridos no conluio de direção do condado tem revelado um postura conservadora da maior parte de seus deputados.",
                    "A discussão da proposta de barrar o consumo do “hidromel da poesia” - um eufemismo para a mistura de bebidas alcólicas com substâncias ilícitas - levou a um drama fervoroso encarado por muitos como a personificação do conservadorismo no âmbito político do condado.",
                    "“O comportamento errático de muitos jóvens pode ser explicado por esses neologismos que nem gosto de citar” critíca o deputado Lig'ma Co'ck",
                    "Essa alegada degradação moral de nossa nação pode ser vista diariamente nas ruas de nossas cidades: a marginalização da seriedade, as alegres festas clandestinas ou até acaloradas brigas em torno de assuntos pérfidos",
                    "A decisão final do Conluio foi de que interferir na liberdade das pessoas seria um ultraje a todos os ideais que eles defendem, mas talvez alguns dos presentes alí usufruam do “Hidromel”."

                ],
        fontes: "Transcrição oficial do Conluio",
        autor: "Syr Renout from S. River",
        data: "12/05/1366"
    },
    {
        titulo: "“Não consigo entender meu filho!”",
        subtitulo: "Até quando a língua pode ser alterada sem ficar irreconhecível?",
        noticia: [
                    "O uso excessivo de gírias pelos mais novos pode indicar uma tendência ao empobrecimento linguístico e a problemas comunicativos geracionais.",
                    "“Hoje decidi fazer uma torta de frango para o meu neto e quando mostrei para ele ele disse “poggers” - eu nem sei o que é isso” - conta dona Eurídice que se embasbacada com o que ela considera “inadequado”",
                    "“Esses jóvens deveriam estar na escola para aprenderem a falar direito mas eles nem se importam com isso, na minha época eu tinha que escalar montanhas para ir para a escola.”",
                    "“Estava na praça de manhã e ouvi dois garotos conversando coisas initeligíveis: “A fracassada da Cuttina nem almeja os charts da floresta, Duddy muito melhor avisa Pop!” “Old que sim!” parecem alienígenas”."

                ],
        fontes: "Entrevista com Dona Eurídice",
        autor: "Syr Renout from S. River",
        data: "03/05/1366"
    },
    {
        titulo: "Eu sou normal?",
        subtitulo: "Você não deveria deixar as outras pessoas definirem sua personalidade!",
        noticia: [
                    "“É que eu sou barraqueira porque sou de áries” disse Leninha depois de assassinar seu marido com três facadas.",
                    "“Eu vou cair no presídio com ela e vou pegar ela porque ela é ursa que invade sua casa, usa suas roupas e ainda te chama de amiga enquanto está junto com o seu marido” ela disse sobre a amante de seu marido que tentou assassiná-la semana passada!",
                    "“Diva! Qunado vem a carreira no rap?” um de seus recém adquiridos fãs que disseram ter Leninha como ídola: “Ví ontem mesmo um tutorial de como ativar arquétipo da Leninha”.",
                    "A defesa alega que o mês que ela nasceu justifica o crime “Já sabe né, ela é de áries não tem como se safar depois de trair KKKKKKK”."
                ],
        fontes: "Porta da delegacia",
        autor: "Syr Renout from S. River",
        data: "17/05/1366"
    },
        
    {
        titulo: "Gandalf é encontrado morto com fogos de artifício em seu ânus",
        subtitulo: "“Encontramos uma carta ao lado do corpo pedindo perdão e dizendo que tinha confundido os anéis” - Revela inquérito policial",
        noticia: [
                    "A morte foi comemorada por muitos em todas as quartilhas do condado, ainda não se sabe se foi suicídio ou assassinato, mas ninguém se importa de investigar."
                ],
        fontes: "Entrevista com o xerife GUrlock",
        autor: "Theos Morde O'Neis Viela",
        data: "11/05/1366"
    },
]

if (window.location.pathname.includes('index.html')) {
    for (let numeroNoticia = 0; numeroNoticia < noticias.length; numeroNoticia++) {
        // Criando container
        let container =  document.createElement('div');
        container.setAttribute('class', 'container');
        
        // Setup do container
        let titulo = document.createElement('h1');
        titulo.textContent = `${noticias[numeroNoticia].titulo} `;
        container.appendChild(titulo);

        let data = document.createElement('span');
        data.textContent = noticias[numeroNoticia].data;
        data.setAttribute('class', 'data');
        titulo.appendChild(data);

        let subtitulo = document.createElement('h3');
        subtitulo.textContent = noticias[numeroNoticia].subtitulo;
        container.appendChild(subtitulo);

        let linha = document.createElement('hr');
        container.appendChild(linha);

        // Setup do conteúdo
        let conteudo = document.createElement('div');
        conteudo.setAttribute('class', 'conteudo');
        container.appendChild(conteudo);

        let imageFile = noticias[numeroNoticia].image;
        if (imageFile !== undefined && imageFile !== null) {
            let image = document.createElement('img');
            image.setAttribute('src', `imagens/${imageFile}`);
            conteudo.appendChild(image);
        }

        let divTexto = document.createElement('div');
        divTexto.setAttribute('class', 'texto');
        conteudo.appendChild(divTexto);

        for (let numeroParagrafo = 0; numeroParagrafo < noticias[numeroNoticia].noticia.length; numeroParagrafo++) {
            let paragrafo = document.createElement('p');
            paragrafo.textContent = noticias[numeroNoticia].noticia[numeroParagrafo]
            divTexto.appendChild(paragrafo)
        }
        // Fim do conteúdo

        // Fontes e créditos
        let autor = document.createElement('h4');
        autor.setAttribute('class', 'autor');
        autor.textContent = `${noticias[numeroNoticia].autor} | `;
        container.appendChild(autor);

        let fontes = document.createElement('span');
        fontes.setAttribute('class', 'Fontes');
        fontes.setAttribute('data-details', noticias[numeroNoticia].fontes);
        fontes.textContent = 'Fontes';
        autor.appendChild(fontes);

        /*fontes.addEventListener("mouseover", function(){
            PopUp(this);
        });
        fontes.addEventListener("mouseout", function(){
            RemovePop();
        });*/

        //
        document.getElementById('NOTICIAS').appendChild(container)
    }
}

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