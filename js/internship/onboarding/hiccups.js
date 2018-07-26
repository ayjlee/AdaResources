$(document).ready(() => {
  const content = [
    {
      case: 'No established mentor',
      action: `<ul>
      <li>Follow up with emails, you can CC Alexandra</li>
      <li>Notify company Ada contact (HR/Recruiter), their goal is to make sure everyone has an established project and mentor</li>
      <li>Try to get a mentor through official channels, even if that person is not in your team</li>
      <li>Ask for a volunteer mentor from University Intern program or Women in tech group</li>
      </ul>`,
    },
    {
      case: 'No established Project at beginning / Project changes',
      action: `<ul>
      <li>Keep Ada contact (HR/Recruiter) in loop</li>
      <li>Project can potentially change
      <ul>
      <li>Keep progress documented, including tutorials that you’re doing!</li>
      <li>Potentially comes with team / tech stack change</li>
      </ul>
      </li>
      <li>Not all companies give projects, you also may be integrated with the team or doing tickets</li>
      </ul>`,
    },
    {
      case: 'Manager  / Mentor can’t make it to scheduled 1:1',
      action: 'Look for open time on their calendar and reschedule',
    },
    {
      case: 'Change of manager or mentor during internship',
      action: `<ul>
      <li>Set up a time to meet with both old and new manager/mentor to facilitate transition</li>
      <li>Try to set up recurring meetings with new manager or mentor ASAP. If you have trouble with this, reach out</li>
      </ul>`,
    },
    {
      case: 'Re-Org',
      action: 'They happen a lot at big companies )-:',
    },
    {
      case: 'No scheduled/recurring 1:1',
      action: `Schedule it on outlook for them, they might have just forgotten / gotten busy.
      Example email: “Feel free to change the date / time to something that works best for you”`,
    },
    {
      case: 'Stuck on finding good learning resources',
      action: `<ul>
      <li>Ask if team has Udemy account</li>
      <li>Ask about utilities team uses (potential shared accounts with team / company)</li>
      <li>Reach out to other Adies</li>
      </ul>`,
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'Possible Hiccups';

  const table = document.createElement('table'); let tr; let td; let row; let cell;

  tr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  tr.appendChild(th1);
  th1.innerHTML = 'Hiccup';
  tr.appendChild(th2);
  th2.innerHTML = 'Previous Intern Actions';
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

  document.getElementById('hiccups').appendChild(header);
  document.getElementById('hiccups').appendChild(table);
});
