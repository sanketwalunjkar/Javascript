const xhttp = new XMLHttpRequest(), 
  log = console.log;
xhttp.open('GET', 'https://reqres.in/api/products/3', true);
xhttp.onreadystatechange = () => xhttp.readyState === 4 && xhttp.status == 200 ? log(xhttp.responseText) : log(xhttp.readyState)
xhttp.send();
