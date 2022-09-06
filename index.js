console.log("here");
let button = document.getElementById("bg-button");
button.addEventListener("click", changeBGColor);

function changeBGColor() {
    document.body.style.background = 'lightblue'; 
}

let button2 = document.getElementById("change-text");
button2.addEventListener("click", changeText);

function changeText() {
    console.log("hello");
    let text1 = document.getElementById("text-in-q");
    text1.innerHTML = "This is the text that has changed now that you clicked the button!";
}

let myH3 = document.getElementById("my-h3");
myH3.addEventListener("mouseover", () => {
    myH3.style.backgroundColor = 'pink';
})

myH3.addEventListener("mouseout", () => {
    myH3.style.backgroundColor = 'blueviolet';
})