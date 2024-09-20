/*
}Aqui temos um comentário de diversas linhas.
O código abaixo é um resumo do que vimos neste primeiro curso do P5js
*/

//Vamos declarar uma variável global (este é um comentário de uma linha)
let palavra;

/*
A variável global pode ser chamada em qualquer parte do código
*/

//Agora vamos chamar a função setup - função que é executada apenas uma vez e é encerrada
function setup() {
  createCanvas(400, 400);

  //na linha 19 vamos preencher a váriável palavra que até então está vazia.
  console.log("linha 18: " + palavra) //Veja no console que a varíavel está vazia:
  palavra = palavraAleatoria();
  console.log("linha 20: " + palavra)  //Veja agora qual palavra foi escolhida
 

}
/*
Essa função palavraAleatoria() vai:
1 - criar uma variável local (só existe dentro da função) chamada palavras
2 - preencher essa variável com um array de palavras
3 - retornar uma das palavras, de modo aleatório
*/
function palavraAleatoria(){
  let palavras = ["Estou", "aprendendo", "JavaScript"];
  return random(palavras);
}
//Agora temos ums função que prepara as cores
function inicializaCores() {

  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

//Função que vai definir a quantidade de letras que vai aparecer ao mover horizontalmente o mouse
function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

//Finalmente, a função draw que é um looping infinito
function draw() {

  inicializaCores();
  //criar o objeto texto
  text(palavraParcial(0, width), 200, 200);
 
  //Agora, vamos mudar a palavra que está na variável global toda vez que apertarmos a tecla de espaço
    if (keyIsDown(32))
    {
    palavra = palavraAleatoria();
    }

}