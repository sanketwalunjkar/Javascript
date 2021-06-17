const accordianData = [
    {
        title: "Home page",
        body: "Home data"
    },
    {
        title: "About page",
        body: "About data"
    },
    {
        title: "Contact page",
        body: "Contact data"
    },
    {
        title: "Help page",
        body: "Help data"
    }
];

document.getElementById('accordian').addEventListener('click', (event) => {
    const liIndex = event.target.getAttribute('data-index'),
        accordianDataIndex = accordianData[liIndex];
    document.querySelector('section h2').innerHTML = accordianDataIndex.title;
    document.querySelector('section div').innerHTML = accordianDataIndex.body;
});



