///////VARIABLES
// var nome = "Felipe";
// var idade = 29;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo"
// alert("Bem vindo " + nome + ". Sua idade é: " + idade);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));   //replaces the string declared
// alert(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

///////LIST
// var lista = ["maçã", "pera", "laranja"];
// lista.push("uva");  //add item
// console.log(lista[3]);
// lista.pop();    //remove last item
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());   //invert elements order
// console.log(lista.toString()[0]); //it will print the first letter of the string
// console.log(lista.join(" - "));     //to string, but separating the elements with the given parameter 

///////DICTIONARY
// var fruta = {nome:"maçã", cor:"vermelho"}   //this is a Dictionary, to create an object similar to a JSON object 
// console.log(fruta);
// var frutas = [{nome:"maçã", cor:"vermelho"},{nome:"uva", cor:"roxo"}]
// console.log(frutas[1].nome);

/////// IF-ELSE
// var idade = prompt("Qual sua idade");   //creates an input dialog
// if(idade >= 18){
//     alert("maior de idade")
// } else{
//     alert("menor de idade")
// };

///////LOOP
//var count = 0;
// while(count <= 5){
//     console.log(count);
//     count++;
// };
// var count2;
// for(count2=0; count2 <=5; count2++){
//     console.log(count2);
// }

//////DATE
// var d = new Date();
// alert(d);
// console.log(d.getMonth()+1);     //month returns 0 for january, hence +1
// console.log(d.getHours());

//////FUNCTION
// function soma(n1,n2){
//     return n1 + n2;
// }
// console.log(soma(5, 10));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b><u>Obrigado por clicar</u></b>";

    //console.log(document.getElementById("agradecimento"));  //shows the element, including html tags
}

function redirecionar(){
    window.open("https://google.com");  //opens new tab
    //window.location.href = "https://google.com";  opens on the same tab
}

// function trocar(){   //for using with one single element
//     document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
// }

function trocar(element){   //for using with multiple elements, passing "this" as parameter in the tag
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element){
    element.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(element){
    console.log(element.value);
}