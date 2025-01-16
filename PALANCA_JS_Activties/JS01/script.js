
const countDisplay = document.getElementById("count");
const countButton = document.getElementById("countButton");


let count = 0;

countButton.addEventListener("click", () => {
    count++; 
    countDisplay.textContent = count;
});