$(document).ready(() => {
  const content = [
    'Wow so medium',
  ];

  const list = document.createElement('ul'); let li;

  for (let item = 0; item < content.length; item += 1) {
    li = document.createElement('li');
    li.innerHTML = content[item];
    list.appendChild(li);
  }

  document.getElementById('mediumCompany').appendChild(list);
});
