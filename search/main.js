const searchTitle = {
  init: () => {
    searchTitle.fetchDtata();
    searchTitle.filterData();
  },
  fetchDtata: () => {
    const wrap = document.getElementById('dataWrap');
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((data) => data.json())
      .then((responce) => {
        responce.forEach(item => {
          showRowData = `<tr>
                          <td>${item.id}</td>
                          <td class='title-text'>${item.title}</td>
                          <td>${item.userId}</td>
                          <td class='complete-text'>${item.completed}</td>
                        </tr>`;
          wrap.innerHTML += showRowData;
        });
      })
      .then(() => {
        const inputField = document.getElementById('searchInput'),
          list = document.querySelector('#dataWrap');
        inputField.addEventListener('keyup', e => {
          const text = e.target.value.toLowerCase(),
            tdItem = list.querySelectorAll('td.title-text');
          [...tdItem].forEach(element => {
            const titleText = element.textContent,
              trItemClass = element.parentElement.classList;
            element.innerHTML = titleText;
            if (text == '') {
              trItemClass.remove('hide');
            } else if (titleText.toLowerCase().indexOf(text) != -1) {
              const regexpText = new RegExp(text, 'gi');
              element.innerHTML = titleText.replace(regexpText, `<strong class="highlight">${text}</strong>`);
              trItemClass.remove('hide');
            }
            else {
              trItemClass.add('hide');
            }
          });
        });
      })
  },
  filterData: () => {
    const filterId = document.getElementById('selectFilter');
    filterId.addEventListener('change', () => {
      const completeItem = document.querySelectorAll('td.complete-text');
      [...completeItem].forEach(comItem => {
        const filterVlaue = filterId.value,
          completeValue = comItem.textContent,
          trItemClass = comItem.parentElement.classList;
        if (filterVlaue === 'all') {
          trItemClass.remove('hide');
        } else {
          filterVlaue !== completeValue ? trItemClass.add('hide') : trItemClass.remove('hide');
        }
      });
    })

  }

};

document.addEventListener('DOMContentLoaded', searchTitle.init());
