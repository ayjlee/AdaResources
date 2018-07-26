$(document).ready(() => {
  const content = [
    {
      case: 'Schedule 1:1s',
      action: `<ul>
      <li>Weekly
      <ul>
      <li>1:1 with Manager 30 mins</li>
      <li>1:1 with Mentor 30 mins</li>
      </ul>
      </li>
      <li>Monthly
      <ul>
      <li>Manger & Mentor Meeting 30mins</li>
      </ul>
      </li>
      <li>Bi-Monthly / At-least-once!
      <ul>
      <li>1:1 with Director or VP (Manager’s Manager)</li>
      </ul>
      </li>
      </ul>`,
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'First Week';

  const table = document.createElement('table'); let tr; let td; let row; let cell;

  tr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  tr.appendChild(th1);
  th1.innerHTML = 'Item';
  tr.appendChild(th2);
  th2.innerHTML = 'Suggestions';
  table.appendChild(tr);

  for (let i = 0; i < content.length; i += 1) {
    let item = content[i];
    tr = document.createElement('tr');
    Object.keys(item).forEach((attribute) => {
      td = document.createElement('td');
      tr.appendChild(td);
      td.innerHTML = item[attribute];
    });
    table.appendChild(tr);
  };

  document.getElementById('firstWeek').appendChild(header);
  document.getElementById('firstWeek').appendChild(table);
});
