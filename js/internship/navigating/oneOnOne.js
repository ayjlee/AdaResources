$(document).ready(() => {
  const content = [
    {
      company: `<h5>End of Month 1</h5>
      <p>OK</p>`,
      intern: 'Advice advice',
    },
    {
      company: `<h5>Ongoing Monthly Duties</h5>
      <p>OK</p>`,
      intern: 'Advice advice',
    },
  ];

  const header = document.createElement('h4');
  header.textContent = '1:1 Meetings';

  const table = document.createElement('table'); let tr; let td; let row; let cell;

  tr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  tr.appendChild(th1);
  th1.innerHTML = 'Info Given to Companies';
  tr.appendChild(th2);
  th2.innerHTML = 'Intern Suggested Action Items';
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

  document.getElementById('oneOnOne').appendChild(header);
  document.getElementById('oneOnOne').appendChild(table);
});
