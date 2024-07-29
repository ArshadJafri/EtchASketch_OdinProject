let color= 'black';

function createContainer(size){

    let container = document.querySelector(".main_container");
    let eraser = container.querySelectorAll("div");
    eraser.forEach((div)=>div.remove());
        container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let gridSize = Math.pow(size,2);

    for(let i =0;i<gridSize;i++){
        let pixel = document.createElement("div");
        pixel.classList.add("grid");
        container.style.backgroundColor = "white";
        container.appendChild(pixel);
        pixel.addEventListener("mouseover",colorSquare);
    }
}

createContainer(16);


function colorSquare() {
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
  }


function changeSize(input) {
    input >= 2 && input <= 100 ? createContainer(input) : console.log("input error! to many or to few squares");
  };
function clearGrid(){

    let container = document.querySelector(".main_container");
    let eraser = container.querySelectorAll("div");
    eraser.forEach((div) =>div.style.backgroundColor="white");
}

function changeColor(choice){
    color = choice;
}
