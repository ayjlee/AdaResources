$(document).ready(() => {
  const content = [
    'Wow so big',
  ];

  const list = document.createElement('ul'); let li;

  for (let item = 0; item < content.length; item += 1) {
    li = document.createElement('li');
    li.innerHTML = content[item];
    list.appendChild(li);
  }

  document.getElementById('largeCompany').appendChild(list);
});
