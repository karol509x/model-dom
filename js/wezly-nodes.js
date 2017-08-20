'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

/*console.log(pierwszyDiv.firstChild);*/

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

console.log(pierwszyDiv.nodeType);

/*console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);*/