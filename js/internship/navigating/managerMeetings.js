$(document).ready(() => {
  const content = [
    {
      manager: `<h5>End of Month 1</h5>
      <p>Schedule a 60 minute combined check-in meeting with manager and mentor.
      Review progress with intern following the Ada intern review template
      (see Appendix A.), discussing the following:</p>
      <p>Overview of Internship Progress MTD
      <ul>
      <li>Top 3 LP Strengths</li>
      <li>Top 3 Technical Strengths (along with code reviews to highlight)</li>
      <li>Top 3  LP Areas of Opportunity</li>
      <li>Action plan to address areas of opportunity to be reviewed at the next
      monthly check-in</li>
      </ul>
      </p>`,
      intern: 'Advice advice',
    },
    {
      manager: `<h5>Ongoing Monthly Duties</h5>
      <p>60 minute combined check-in with mentor and manager, covering the items
      from the month 1 check-in as well as discussing the progress against the
      action plan from the previous month</p>`,
      intern: 'Advice advice',
    },
  ];

  const header = document.createElement('h4');
  header.textContent = 'Manager Meetings';

  const table = document.createElement('table'); let tr; let td; let row; let cell;

  tr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  tr.appendChild(th1);
  th1.innerHTML = 'Info Given to Managers';
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

  document.getElementById('managerMeetings').appendChild(header);
  document.getElementById('managerMeetings').appendChild(table);
});
