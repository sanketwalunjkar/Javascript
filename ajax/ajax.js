const xhttp = new XMLHttpRequest(), 
  log = console.log;
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
xhttp.onreadystatechange = () => xhttp.readyState === 4 && xhttp.status == 200 ? log(xhttp.responseText) : log(xhttp.readyState)
xhttp.send();
