const xhttp = new XMLHttpRequest(),
  log = console.log;
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status == 200) {
    const response = JSON.parse(xhttp.responseText),
      selectElement = document.getElementById('demo');
    response.map(item => {
      const liElement = document.createElement('li');
      liElement.innerHTML = item.title;
      selectElement.appendChild(liElement);
    });
  } else {
    log(xhttp.readyState)
  }
}
xhttp.send();
