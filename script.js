const perguntas = [

{
pergunta:"Qual cientista teve sua contribuição para a descoberta do DNA pouco reconhecida?",

opcoes:[
"Rosalind Franklin",
"James Watson",
"Linus Pauling"
],

correta:0,

explicacao:
"Rosalind Franklin produziu imagens de difração de raios X fundamentais para descobrir a estrutura do DNA. Entretanto, Watson e Crick receberam o Nobel em 1962, enquanto seu trabalho foi pouco reconhecido durante sua vida."
},

{
pergunta:"Qual física contribuiu para explicar a fissão nuclear mas não recebeu o Nobel?",

opcoes:[
"Lise Meitner",
"Otto Hahn",
"Marie Curie"
],

correta:0,

explicacao:
"Lise Meitner interpretou corretamente a fissão nuclear. Porém, apenas Otto Hahn recebeu o Nobel de Química em 1944."
},

{
pergunta:"Quem descobriu os primeiros pulsares?",

opcoes:[
"Jocelyn Bell Burnell",
"Antony Hewish",
"Carl Sagan"
],

correta:0,

explicacao:
"Jocelyn Bell Burnell identificou os primeiros pulsares durante seu doutorado, mas o Nobel foi concedido apenas ao seu orientador Antony Hewish."
},

{
pergunta:"Quem foi a primeira mulher a ganhar um Nobel?",

opcoes:[
"Marie Curie",
"Ada Lovelace",
"Barbara McClintock"
],

correta:0,

explicacao:
"Marie Curie ganhou o Nobel de Física em 1903 e posteriormente o Nobel de Química em 1911."
},

{
pergunta:"Quem criou o termo 'Efeito Matilda'?",

opcoes:[
"Margaret Rossiter",
"Rosalind Franklin",
"Rita Levi-Montalcini"
],

correta:0,

explicacao:
"A historiadora Margaret Rossiter criou o termo em homenagem à ativista Matilda Joslyn Gage."
}

];

let listaPerguntas = [];
let indice = 0;
let pontos = 0;

function embaralhar(lista){

return [...lista].sort(()=>Math.random()-0.5);

}

function iniciarQuiz() {

    const qtd = Number(document.getElementById("quantidade").value);

    listaPerguntas = embaralhar(perguntas).slice(0, qtd);

    indice = 0;
    pontos = 0;

    document.getElementById("resultado").innerHTML = "";

    mostrarPergunta();
}

function mostrarPergunta(){

const quiz=document.getElementById("quiz");

const p=listaPerguntas[indice];

quiz.innerHTML=`
<h3>${indice+1}. ${p.pergunta}</h3>

${p.opcoes.map((opcao,i)=>

`<button onclick="responder(${i})">${opcao}</button>`

).join("")}

<div id="explicacao"></div>
`;

}

function responder(escolha){

const p=listaPerguntas[indice];

const div=document.getElementById("explicacao");

const botoes=document.querySelectorAll("#quiz button");

botoes.forEach(botao=>botao.disabled=true);

if(escolha===p.correta){

pontos++;

div.innerHTML=`
<p style="color:green;"><b>✔ Resposta correta!</b></p>
<p>${p.explicacao}</p>

<button onclick="proximaPergunta()">
Próxima
</button>
`;

}else{

div.innerHTML=`
<p style="color:red;"><b>✘ Resposta incorreta.</b></p>

<p><b>Resposta correta:</b> ${p.opcoes[p.correta]}</p>

<p>${p.explicacao}</p>

<button onclick="proximaPergunta()">
Próxima
</button>
`;

}

}

function proximaPergunta(){

indice++;

if(indice<listaPerguntas.length){

mostrarPergunta();

}else{

document.getElementById("quiz").innerHTML="";

document.getElementById("resultado").innerHTML=`

<h2>Quiz Finalizado!</h2>

<h3>Você acertou ${pontos} de ${listaPerguntas.length} questões.</h3>

<button onclick="iniciarQuiz()">
Jogar novamente
</button>

`;

}

}