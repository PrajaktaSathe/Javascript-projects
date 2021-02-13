var colors = ['white', 'red', 'blue', 'green', 'grey', 'cyan'];

function changeColorBlue() {
    document.body.style.background = "blue";
}

function changeColorRed() {
    document.body.style.background = "red";
}

function changeColorGreen() {
    document.body.style.background = "green";
}

function changeColorOfDiv() {
    document.getElementById('myDiv').style.backgroundColor = 'white';
}

function changeColorOfDiv2() {
    document.getElementById('myDiv2').style.backgroundColor = colors[Math.floor(Math.random()*7)];
}