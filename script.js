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


window.onload = function iniciar(){
       let qtdeCartas = Number(prompt('Diga a quantidade de cartas'));
       console.log(qtdeCartas)
       while(qtdeCartas%2==1 || qtdeCartas<4 || qtdeCartas >14){
        alert ("Quantidade de cartas inválida!");
        qtdeCartas = prompt('Diga a quantidade de cartas');
       }

     
        //preciso inserir cartas no containeir que não tem nada, tem que selecionar ele
        const jogoreal = document.querySelector(".containerjogo");
        gifs.length = qtdeCartas;
        gifs.sort(comparador);
        console.log(jogoreal)
           //a partir da condição que tem que adicionar até no máximo a qtd de cartas escolhida
           for(let i = 0; i < qtdeCartas; i++){
           // e com isso, adicionar a qtde de cartas que foi digitada no container que não tem nada
          jogoreal.innerHTML += 
           `  <li onclick="virar(this)" class="card">
           <div class="frente"></div>
           <div class="versogif"><img src="./arquivos/${gifs[i]}.gif"></div> 
           
       </li>`;

       
       
           }
        }


function comparador() {
    return Math.random() - 0.5;
}

function virar(elemento){
    elemento.classList.toggle("versogif");
}
        



    