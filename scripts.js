var isdark = true;
var cafevis = true;
let currentImage = 1;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function toggleMode() {
    document.body.classList.toggle(document.getElementById("mode").className = "dark-mode");

    if (('.dark-mode').is(':visible')) {
        isdark = true;
    }
    else {
        isdark = false;
    }
}

function toggleImage() {
    const imageElement = document.getElementById('image');
    if (currentImage === 1) {
        imageElement.src = 'images/Café_wall2.svg.png';
        currentImage = 2;
    } 
    else {
        imageElement.src = 'images/Café_wall.svg.png';
        currentImage = 1;
    }
}


function playQuack() {
    var sound = new Audio('quack.mp3');
    sound.play();
}