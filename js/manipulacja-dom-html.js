'use strict';

var mainHeader = document.getElementById('main-header');
//Przypisujemy nagłówek strony do zmiennej


var tresc = mainHeader.innerHTML; //Pobieranie treści z nagłówka 
console.log(tresc);

mainHeader.innerHTML = "Treść nagłówka"; //Dodajemy tresc do nagłówka 

var link = document.getElementsByClassName('link')[0];
//Przypisujemy pierwszy link do zmiennej

console.log(link);

link.href = "https://akademia108.pl"; // Nadpisujemy atrybut href w linku

link.className = 'nowa-klasa'; // Nadpisujemy nazwe klasy w linku 

link.style.color = '#11aa22'; //Dodajemy styl