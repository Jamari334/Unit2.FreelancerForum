const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = 'Freelancers Forum';
body.appendChild(h1)
const p = document.createElement('p');
p.innerText = 'The average starting price is $30.';
h1.appendChild(p)

const h2 = document.createElement('h2');
h2.innerText = 'Available Freelancers';
body.appendChild(h2)


const Freelancers = [
    {name: 'Jamari', occupation: 'musician', salary: 300 },
    {name: 'Carter', occupation: 'singer', salary: 300 },
    {name: 'Autumn', occupation: 'dancer', salary: 300 },
    {name: 'Jelani', occupation: 'artist', salary: 300 },
    {name: 'Tommy', occupation: 'hitman', salary:1000},
    

]
console.log(Freelancers);

const table = document.createElement("TABLE")
const headerRow = table.insertRow();
for (const key in Freelancers[0]) {
  const th = document.createElement('th');
  th.appendChild(document.createTextNode(key));
  headerRow.appendChild(th);
}
Freelancers.forEach( function (item) {
  const row = table.insertRow();
  for (const key in item) {
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(item[key]));
  }
});

body.appendChild(table)
console.log(headerRow)
//------STYLING------
body.setAttribute("style", "max-width: 300px; max-height: 375px; border: blue 10px solid; padding: 10px; margin: 15px;");
body.h1.setAttribute("style", "text-align: center;");
table.setAttribute("style", "border: black 5px solid; margin: 10px;" );


