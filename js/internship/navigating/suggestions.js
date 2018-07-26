$(document).ready(() => {
  const content = [
    'Do something',
    'Another piece of advice',
  ];

  const header = document.createElement('h4');
  header.textContent = 'Additional suggestions';

  const list = document.createElement('ul'); let li;

  for (let item = 0; item < content.length; item += 1) {
    li = document.createElement('li');
    li.innerHTML = content[item];
    list.appendChild(li);
  }

  document.getElementById('suggestions').appendChild(header);
  document.getElementById('suggestions').appendChild(list);
});
