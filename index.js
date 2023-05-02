let hero = document.querySelector(".hero")
let name = document.querySelector(".hero h1").innerHTML
let index = 0;
let timer;
let nameElement = "";

function typeWriter() {
    while (index <= name.length) {
        nameElement = name.substr(0, index);
        index++;
        if (index > name.length) {
            index = 0;
        }
        document.querySelector(".hero h1").innerHTML = nameElement;
        break;
    }
}

timer = setInterval(typeWriter, 100);

const form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from redirecting to a new page
    // handle the form data here
});


const arrow = document.querySelector('.arrow-container');

arrow.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});