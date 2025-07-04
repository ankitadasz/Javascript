const colorcode=document.getElementById("color-code");
function generateRandomNumber(min, max) {
     return min + Math.floor(Math.random() * (max - min + 1));
}

function genrateRandomColorRGB() {
    const red=generateRandomNumber(0,255);
    const green=generateRandomNumber(0,255);
    const blue=generateRandomNumber(0,255);
     return `rgb(${red},${green},${blue})`;

}

