$(document).ready(() => {
  const content = {};

  content.Meetups = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      description: 'A site for viewing tutorial videos',
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'General Links';

  const list = document.createElement('div'); let ul; let li; let p;

  Object.keys(content).forEach((category) => {
    p = document.createElement('p');
    p.innerHTML = `<h5>${category}</h5>`;
    ul = document.createElement('ul');

    for (let link = 0; link < content[category].length; link += 1) {
      li = document.createElement('li');
      li.innerHTML = `
      <a href="${content[category][link].link}">
      ${content[category][link].name}</a> -
      ${content[category][link].description}
      `;
      ul.appendChild(li);
    }

    p.appendChild(ul);
    list.appendChild(p);
  });

  document.getElementById('generalLinks').appendChild(header);
  document.getElementById('generalLinks').appendChild(list);
});
