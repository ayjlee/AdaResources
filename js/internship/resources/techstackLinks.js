$(document).ready(() => {
  const content = {};

  content.MEAN = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      description: 'A site for viewing tutorial videos',
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'Tech Stacks';

  const list = document.createElement('div'); let ul; let li; let p;

  Object.keys(content).forEach((techstack) => {
    p = document.createElement('p');
    p.innerHTML = `<h5>${techstack}</h5>`;
    ul = document.createElement('ul');

    for (let link = 0; link < content[techstack].length; link += 1) {
      li = document.createElement('li');
      li.innerHTML = `
      <a href="${content[techstack][link].link}">
      ${content[techstack][link].name}</a> -
      ${content[techstack][link].description}
      `;
      ul.appendChild(li);
    }

    p.appendChild(ul);
    list.appendChild(p);
  });

  document.getElementById('techstackLinks').appendChild(header);
  document.getElementById('techstackLinks').appendChild(list);
});
