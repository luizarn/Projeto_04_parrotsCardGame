const gifs = [
'angelparrot',
'angelparrot',
'autonomousparrot',
'autonomousparrot',
'dabparrot',
'dabparrot',
'hypnoparrot',
'hypnoparrot',
'mergeconflictparrot',
'mergeconflictparrot',
'wineparrot',
'wineparrot',
'zombieparrot',
'zombieparrot',
];

let contador = 0;
let vitorias = 0;
let qtdeCartas;
let escolhidas =[];
let itemComparador;
let cartas = [];
let indice1;

window.onload = function iniciar(){
qtdeCartas = Number(prompt('Diga a quantidade de cartas (obs.: entre 4 e 14)'));
while(qtdeCartas%2==1 || qtdeCartas<4 || qtdeCartas >14){
alert ("Quantidade de cartas inválida!");
}

//preciso inserir cartas no containeir que não tem nada, tem que selecionar ele
const jogoreal = document.querySelector(".containerjogo");
//preciso igualar o array dos gifs com a qtde de cartas escolhidas
gifs.length = qtdeCartas;
gifs.sort(comparador);
//a partir da condição que tem que adicionar até no máximo a qtd de cartas escolhida
for(let i = 0; i < qtdeCartas; i++){
// e com isso, adicionar a qtde de cartas que foi digitada no container que não tem nada
jogoreal.innerHTML += 
 `  <div class="card" onclick="virareMarcar(this)">
 <div class="front-face face"></div>
 <div class="back-face face"><img src="./arquivos/${gifs[i]}.gif"></div> 
 </div> `;
 }
}

function comparador() {
    return Math.random() - 0.5;
}

function virareMarcar(elemento){
   
//contar o número de jogadas/cliques
     contador++
    //quando clicar, adicionar na array vazia
    escolhidas.push(elemento);
     //preciso desvirar a carta que foi clicada
    elemento.classList.toggle('virada');
 
    //só pode adicionar 2 cartas
    if(escolhidas.length === 2){
    var carta1 = selecionarCarta(0);
    var carta2 = selecionarCarta(1);
    
        if(carta1 === carta2){
            //para não poder ser clicado novamente nas cartas que são iguais
            setTimeout(()=>{elemento.removeAttribute("onclick")},100);
            setTimeout(()=>{itemComparador.removeAttribute("onclick")},100);
            escolhidas = [];
            vitorias += 2
        }

        else if(carta1 !== carta2) {
            setTimeout(()=>{itemComparador.classList.remove('virada')},1000);
            setTimeout(()=>{elemento.classList.remove('virada')},1000);
            setTimeout(()=>{escolhidas = [];},2001);
        }
    }

    if(escolhidas.length < 2){
        itemComparador = elemento
    }

    if(vitorias == qtdeCartas){
        setTimeout(fimdeJogo, 800);
        }
}

function selecionarCarta(i){
    var carta = escolhidas[i].querySelector("img");
    var gifselecionado  = carta.getAttribute('src');
    return gifselecionado;
}
    
function fimdeJogo(){
    alert(`Você ganhou em ${contador} jogadas!`)
}
