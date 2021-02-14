// A list of colors to choose from -
var colors = ['grey', 'cyan', 'rgb(10, 100, 100)', 'wheat', 'gold', 'beige', 'purple', 'violet', 'aquamarine', 'chartreuse', 'crimson', 'fuchsia'];

// This function changes color of required element (here it is body) to blue -
function changeColorBlue() {
    document.body.style.background = "rgb(0, 25, 253)";
}

// This function changes color of required element to red -
function changeColorRed() {
    document.body.style.background = "red";
}

// This function changes color of required element to green -
function changeColorGreen() {
    document.body.style.background = "rgb(0, 255, 0)";
}

// Hard-coded way of changing an element's color - 
function changeColorOfDiv() {
    document.getElementById('myDiv').style.backgroundColor = 'white'; 
}

// This function chooses a random color from the colors list -
function changeColorOfDiv2() {
    document.getElementById('myDiv2').style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

// This function changes the text of the element - 
function changeTextOfDiv() {
    document.getElementById('myTextDiv').innerText = "This is the changed text!!";
}

// This function adds a box shadow to the element - 
function addBoxShadow() {
    document.getElementById('myTextDiv2').style.boxShadow = "20px 20px 20px black";
}