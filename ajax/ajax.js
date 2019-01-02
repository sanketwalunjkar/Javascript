const xhttp = new XMLHttpRequest(),
  log = console.log,
  tableElement = document.getElementById('demo'),
  tableBody = document.createElement('tbody'),
  tbody = tableElement.appendChild(tableBody);
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status == 200) {
    const response = JSON.parse(xhttp.responseText);
      response.map(item => {
        if (item.completed === false) {
          tableData(item);
        }
      });
  } else {
    log(xhttp.readyState)
  }
}
xhttp.send();


let tableData = (item) => {
  let selectElement = document.createElement('tr'),
    liElement = document.createElement('td');
  liElement.innerHTML = item.title;
  selectElement.appendChild(liElement);
  tbody.appendChild(selectElement);
}