const elementos = [
  {tag: 'p', texto: 'Aqui é o texto do paragrafo'},
  {tag: 'div', texto: 'Aqui é a DIV'},
  {tag: 'section', texto: 'Aqui é a section'},
  {tag: 'footer', texto: 'Aqui é a footer'},
];

const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let {tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);