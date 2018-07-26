$(document).ready(() => {
  const content = [
    'Coffee and such',
  ];

  const header = document.createElement('h4');
  header.textContent = 'Teammate Meetings';

  const list = document.createElement('ul'); let li;

  for (let item = 0; item < content.length; item += 1) {
    li = document.createElement('li');
    li.innerHTML = content[item];
    list.appendChild(li);
  }

  document.getElementById('teammatesMeetings').appendChild(header);
  document.getElementById('teammatesMeetings').appendChild(list);
});
