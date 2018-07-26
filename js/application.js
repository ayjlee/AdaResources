document.getElementById('navMenu').innerHTML =
'<ul>'
 + '<li><a href="classroom.html">Classroom</a></li>'
 + '<li><a href="internship.html">Internship</a></li>'
 + '<li><a href="jobhunting.html">Job Hunting</a></li>'
 + '<li><a href="professional.html">Professional</a></li>'
 + '<li><a href="adanetwork.html">Ada Network</a></li>'
 + '</ul>';

const acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');

    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
