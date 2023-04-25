// Get elements for Cavas Dot Button and Stop Button
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");
ctx.fillStyle = "blue";

var requestID; // init global var for use with animation frames

var clear = (e) => {
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;


// drawCircle command taken from k30 with added parameter r
var drawCircle = (e, r) => {
    var mouseX = e.offsetX; //gets X-coor of mouse when event is fired
    var mouseY = e.offsetY; //gets Y-coor of mouse when event is fired
    console.log("mouseclick registered at ", mouseX, mouseY);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
};


var drawDot = () => {
    /*
    Wipe the canvas,
    repaint the circle,

    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation
    You will need 
    window.cancelAnimationFrame()
    window.requestAnimationFrame()
    */
    ctx.clearRect(0, 0, c.width, c.height);
    drawCircle(e, radius);
    radius++;
    requestID = window.requestAnimationFrame();

}

var stopIt = () => {
    console.log("stopIt invoked");
    console.log( requestID );

    window.cancelAnimationFrame(requestID);
    /*
    YOUR CODE HERE
    ... to stop the animation
    you will need window.cancelAnimationFrame()
    */
};

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);