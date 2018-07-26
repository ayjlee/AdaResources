$(document).ready(() => {
  const content = [
    'Reach out to your team to setup a time to meet your Manager / Mentor / Team',
    'Don’t spend a lot of time learning the tech stack before starting, that is part of your internship hours (-:',
  ];

  const header = document.createElement('h4');
  header.textContent = 'Pre-Arrival Advice';

  const list = document.createElement('ul'); let li;

  for (let item = 0; item < content.length; item += 1) {
    li = document.createElement('li');
    li.innerHTML = content[item];
    list.appendChild(li);
  }

  document.getElementById('preArrival').appendChild(header);
  document.getElementById('preArrival').appendChild(list);
});
