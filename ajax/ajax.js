const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status == 200) {
    const response = JSON.parse(xhttp.responseText);
    response.map(item => {
      item.completed === true ? createTable(item, 'completed') : createTable(item, 'incomplete');
    });
  } else {
    console.log(xhttp.readyState)
  }
}
xhttp.send();

const createTable = (item, selector) => {
  let selectElement = document.createElement('tr'),
    tableElement = document.getElementById(selector);
  selectElement.innerHTML = `<td>${item.title}</td> <td>${item.completed}</td>`;
  tableElement.appendChild(selectElement);
}