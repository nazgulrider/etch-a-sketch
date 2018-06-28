let container = document.querySelector("#container");

let grayscaleButton = document.querySelector("#grid-button");
grayscaleButton.addEventListener('click', () => {
    createDivGrid(grayscaleButton.id);
});

let colorGridButton = document.querySelector('#colorgrid');
colorGridButton.addEventListener('click', () => {
    createDivGrid(colorGridButton.id);
})

let reset = document.querySelector('#reset');
reset.addEventListener('click', clearDivGrid);


function getRandom() {
    return Math.floor(Math.random() * Math.floor(256));
}

function clearDivGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createDivGrid(buttonId) {
    if (container.firstChild) clearDivGrid();
    let inputValue = document.querySelector('#textbox').value;
    let gridNum = inputValue * inputValue;

    if (inputValue >= 16 && inputValue <=64) {

        let height = 500 / inputValue;
        let count = 0;
        while (count < gridNum) {
            let gridDiv = document.createElement('div');
            
            if (buttonId === 'colorgrid') {
                gridDiv.style.cssText = 'height: ' + height + 'px; width:' + height +
                    'px;display:inline-block; float:left; background-color: rgba(0, 0, 0, 1)';
                gridDiv.addEventListener('mouseover', (event) => {
                    let red = getRandom();
                    let green = getRandom();
                    let blue = getRandom();
                    event.target.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue +', 1)';
                })

            } else {
                gridDiv.style.cssText = 'height: ' + height + 'px; width:' + height +
                    'px;display:inline-block; float:left;opacity:0.03 ; background-color: rgba(0, 0, 0, 1)';
                gridDiv.addEventListener('mouseover', (event) => {
                    let op = parseFloat(event.target.style.opacity);
                    if (op < 1) { event.target.style.opacity = op + 0.1; }
                })
            }

            container.appendChild(gridDiv);
            count++;
        }
    } else {
        alert('Please input a value between 16 and 64');
        return false;
    }

}

