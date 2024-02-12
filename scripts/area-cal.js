//Using function to reuse same code
//For Rectangle
function calculateRectangleArea(){
    const width = getInputValueById('rectangle-width');
    const lenght = getInputValueById('rectangle-lenght');
    const area = width*lenght;
    setInnerTextById('rectangle-area', area);
}

//For Parallelogram
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base*height;
    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputId){
    const shapeInput = document.getElementById(inputId);
    const shapeText = shapeInput.value;
    const inputValue = parseFloat(shapeText);
    
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element  = document.getElementById(elementId);
    element.innerText = area;
}