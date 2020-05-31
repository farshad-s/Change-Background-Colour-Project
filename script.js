const button = document.getElementById('button');

function randomColour() {
    let colourArray = ['white', 'red', 'orange', 'yellow', 'blue', 'cyan', 'purple', 'darkblue'];
    return colourArray[Math.floor(Math.random() * colourArray.length)];
}

function changeColour() {
    document.body.style.backgroundColor = randomColour();
}

function buttonClick() {
    button.addEventListener('click', function() {
        changeColour();
    })
}

buttonClick();