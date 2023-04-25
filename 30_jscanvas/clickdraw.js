//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init globar state var
var mode = "rect";

//var toggleMode = function(e){
var toggleMode = (e) => {
    console.log("toggling...");
    if (mode === "rect") {
        mode = "circ"
    }
    else {
        mode = "rect"
    }
}

var drawRect = function(e) {
    var mouseX = e.offsetX //gets X-coor of mouse when event is fired
    var mouseY = e.offsetY //gets Y-coor of mouse when event is fired
    console.log("mouseclick registered at ", mouseX, mouseY)
    ctx.fillRect(mouseX, mouseY, 10, 10)
}

var drawCricle = (e) => {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    console.log("mouseclick registered at ", mouseX, mouseY);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

c.addEventListener("click", drawRect) //passes the mouse event as parameter for the function
