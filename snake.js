const container = document.getElementById('container');
const links = container.querySelectorAll('a');

links.forEach((link, index) => {
    console.log(index, links.length);
    link.style.marginLeft = `${index * (100 / links.length)}vw`;
});