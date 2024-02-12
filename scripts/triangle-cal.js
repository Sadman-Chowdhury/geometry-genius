function calculateTriangleArea(){
    //Base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base)

    //Height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    //Area
    const area = 0.5*base*height;

    //Display triangle area
    const triangleAreaSpan  = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}