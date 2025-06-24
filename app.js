var numberInShape = 1;
var oldValue = 0;

let button = document.getElementById("button");

button.onclick = () => {
    let n = document.getElementById("number").value;
    let circle = document.getElementById("circle");
    let square = document.getElementById("square");
    let rectangle = document.getElementById("rectangle");
    let box = document.getElementById("box");

    let j;
    n = Number(oldValue) + Number(n);
    for (j = numberInShape; j <= n; j++) {
        var shape = document.createElement("div");
        shape.innerHTML = numberInShape; // use = instead of +=
        if (square.checked)
            shape.classList.add("square");
        else if (circle.checked)
            shape.classList.add("circle");
        else if (rectangle.checked)
            shape.classList.add("rectangle");
        else
            document.write("Invalid Input");
        box.appendChild(shape);
        numberInShape++; // fixed typo
    }

    oldValue = document.getElementById("box").lastElementChild.innerHTML; // moved outside loop
};
