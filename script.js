function resposta(tipo){

let mensagem=document.getElementById("mensagem");

if(tipo=="certo"){

mensagem.innerHTML="✅ Correto! Mas as mulheres cientistas tiveram papel fundamental nessas descobertas.";

}

else{

mensagem.innerHTML="❌ Não exatamente. Pesquise sobre o Efeito Matilda e descubra quem também contribuiu para essa descoberta.";

}

}