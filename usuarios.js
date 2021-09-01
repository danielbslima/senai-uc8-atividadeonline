const listaDeEventos = ["Workshop: Seja um vilão tão carismático que te transformem num herói", "Roda de debate sobre o sentido da vida", "Roda punk"]
    console.log("Lista de Eventos:")
    console.log(listaDeEventos)

let listaDePalestrantes = ["Loki", "Vegeta", "Severus Snape", "Ranger Verde"]
    console.log("Lista de Palestrantes")
    console.log(listaDePalestrantes)

let listaDeParticipantes = ["Jaime Lannister", "Arthas", "Kylo Ren"]
    console.log("Lista de Participantes")
    console.log(listaDeParticipantes)

if(listaDeParticipantes.length < 100) {
    console.log("Cadastro permitido: Há vagas nesse evento")
    } else {
        console.log("Cadastro não permitido: Excedeu limite de participantes")
    }



var datanasc = new Date("06/24/2012");  
var month_diff = Date.now() - datanasc.getTime();  
var age_dt = new Date(month_diff);   
var year = age_dt.getUTCFullYear();  
var age = Math.abs(year - 1970);  
console.log("Idade apresentada é de: " + age + " anos");  


if(age < 18){
    console.log("Cadastro não permitido: Idade inferior a 18 anos")
} else {
    console.log("Cadastro permitido")
} 

