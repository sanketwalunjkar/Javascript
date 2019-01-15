
let salectEl = document.getElementsByTagName('a')[1];
salectEl.addEventListener('click', page => {
    let hideSection = document.querySelectorAll('section');
        showId = page.currentTarget.dataset.name,
        selectElement = document.getElementById(showId);
    selectElement.setAttribute('style', 'display:block;');
});
