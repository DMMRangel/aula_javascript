function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}
console.log(document.getElementById("agradecimento".innerHTML = "Obrigado por clicar!"));

function redirecionar(){
    //window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por Passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse! <br> Agora, passa a carteira! =D"
    //alert("Obrigado por passar o mouse! =D")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}



















/*var validar = 0;
var idade = prompt("Qual a sua idade?");
function validarIdade(idade){
    
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }return validar;
}
validarIdade(idade)
console.log(validar);*/






/*function soma(n1, n2){
    return n1 + n2
}

alert(soma(2020, 1985));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

//var d = new Date();
//alert(d.getDay());
//alert(d.getMonth());
//alert(d.getHours());



/*var count;
for(count=0; count <= 5; count++){
    alert(count);
};*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
}*/


/*var idade = prompt("Qual a sua idade? ");
if (idade >= 18){
    alert("Maior de Idade");
}
else {
    alert("Menor de idade");
}
*/


/*var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome: "Maçã", cor: "Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["Maçã", "Pêra", "Laranja"];
//console.log(lista);
//console.log(lista.toString())
//console.log(lista.toString()[0])
//console.log(lista.join(" - "));


//lista.push("Uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.length);


//console.log(lista);


/*var nome = "Daniel Rangel";
var idade = 35;
var frase = "Japão é o melhor time do mundo";
alert("Bem vindo " + nome + " você tem " + idade + " anos.");
alert(frase);

console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));*/