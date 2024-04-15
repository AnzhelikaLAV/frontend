//document.writeln('hello world');
//window.document.writeln("hello world");
const div1 = document.createElement('div');

div1.innerText = 'div1';
//console.log(div1);
document.body.appendChild(div1);

const h1 = document.createElement('h1');

h1.innerText = 'Заголовок первого уровня';

document.body.appendChild(h1);

// ---------

const div2 = document.createElement('div');

const h2 = document.createElement('h2');
h2.innerText = 'привет';

document.body.appendChild(div2);

div2.appendChild(h2);

document.body.appendChild(div2);

//---------

const myDiv1 = document.getElementById('my-div-id');

console.log(myDiv1);