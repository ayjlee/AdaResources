$(document).ready(() => {
  const content = [
    {
      timeline: 'Pre-Ada Intern Arriving',
      expectation: `<ul>
      <li>Get to know Ada! Check out our curriculum and reach out to your intern</li>
      <li>Make sure your intern is ready with a desk and computer on their first day.</li>
      <li>Reach out and say hello!</li>
      </ul>`,
      other: `<ul>
      <li>Make sure they have access to all the tools they need.</li>
      </ul>`,
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'Internship Roadmap from Alexandra';

  const table = document.createElement('table'); let tr; let td; let row; let cell;

  tr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  tr.appendChild(th1);
  tr.appendChild(th2);
  th2.innerHTML = 'Expectations of both company and students';
  tr.appendChild(th3);
  th3.innerHTML = 'Other Ideas and Expectations';
  table.appendChild(tr);

  for (let i = 0; i < content.length; i += 1) {
    const item = content[i];
    tr = document.createElement('tr');
    Object.keys(item).forEach((attribute) => {
      td = document.createElement('td');
      tr.appendChild(td);
      td.innerHTML = item[attribute];
    });
    table.appendChild(tr);
  }

  document.getElementById('roadmap').appendChild(header);
  document.getElementById('roadmap').appendChild(table);
});
