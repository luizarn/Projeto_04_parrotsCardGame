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


let escolhidas =[];


window.onload = function iniciar(){
let qtdeCartas = Number(prompt('Diga a quantidade de cartas (obs.: entre 4 e 14)'));
while(qtdeCartas%2==1 || qtdeCartas<4 || qtdeCartas >14){
alert ("Quantidade de cartas inválida!");
qtdeCartas = prompt('Diga a quantidade de cartas');
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
 
    //quando clicar, adicionar na array vazia
    escolhidas.push(elemento);
    console.log(elemento)
     //preciso desvirar a carta que foi clicada
    elemento.classList.toggle('virada');
 
    //só pode adicionar 2 cartas
    if(escolhidas.length === 2){
    var carta1 = selecionarCarta(0);
    var carta2 = selecionarCarta(1);
    console.log(carta1)
    console.log(carta2)
        if(carta1 === carta2){
            alert("acertou")
            escolhidas = [];
        }
        else {
            alert("errou")
            escolhidas = [];
            setTimeout(desvirar, 2000);
            console.log(carta1)
            console.log(carta2)
    }
}
    }

function selecionarCarta(i){
    var carta = escolhidas[i].querySelector("img");
    var gifselecionado  = carta.getAttribute('src');
    return gifselecionado;
}

function desvirar(){
    const cartas = document.querySelectorAll('.virada');
    for( let i = 0; i < cartas.length; i++){
        cartas[i].classList.remove('virada');
    }
  }








