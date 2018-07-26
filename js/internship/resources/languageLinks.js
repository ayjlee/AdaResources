$(document).ready(() => {
  const content = {};

  content.Java = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      description: 'A site for viewing tutorial videos',
    },
    {
      name: 'Google',
      link: 'https://www.google.com/',
      description: 'Search for more',
    },
  ];

  content.React = [
    {
      name: 'Not Youtube',
      link: 'https://www.youtube.com/',
      description: 'Videos',
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'Languages';

  const list = document.createElement('div'); let ul; let li; let p;

  Object.keys(content).forEach((language) => {
    p = document.createElement('p');
    p.innerHTML = `<h5>${language}</h5>`;
    ul = document.createElement('ul');

    for (let link = 0; link < content[language].length; link += 1) {
      li = document.createElement('li');
      li.innerHTML = `
      <a href="${content[language][link].link}">
      ${content[language][link].name}</a> -
      ${content[language][link].description}
      `;
      ul.appendChild(li);
    }

    p.appendChild(ul);
    list.appendChild(p);
  });

  document.getElementById('languageLinks').appendChild(header);
  document.getElementById('languageLinks').appendChild(list);
});
