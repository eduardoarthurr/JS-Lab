

const container = document.getElementById("data")

const data = new Date();

let diaSemana = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let min = data.getMinutes();


switch (mes) {

    case 0: 
        diaSemana = "Domingo"
        break;
    case 1:
        diaSemana = "Segunda-feira"
        break;
    case 2:
        diaSemana = "Terça-feira"
        break;
    case 3:
        diaSemana = "Quarta-feira"
        break;
    case 4:
        diaSemana = "Quinta-feira"
        break;
    case 5:
        diaSemana = "Sexta-feira"
        break;
    case 6:
        diaSemana = "Sábado"
        break;
    
}

switch (mes) {

    case 0: 
        mes = "Janeiro"
        break;
    case 1:
        mes = "Fevereiro"
        break;
    case 2:
        mes = "Março"
        break;
    case 3:
        mes = "Abril"
        break;
    case 4:
        mes = "Maio"
        break;
    case 5:
        mes = "Junho"
        break;
    case 6:
        mes = "Julho"
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;
    case 9:
        mes = "Outubro"
        break;
    case 10:
        mes = "Novembro"
        break;
    case 11:
        mes = "Dezembro"
        break;
    
}


container.innerHTML = `${mes}, ${dia} de ${mes} de ${ano}, ${hora}:${min} `