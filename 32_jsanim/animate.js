// Get elements for Cavas Dot Button and Stop Button
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.strokeStyle = "black";

var requestID; // init global var for use with animation frames

var clear = (e) => {
    e.preventDefault(); // 
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 100;
var growing = true;

var dvdLogoSetup = function() {
    window.cancelAnimationFrame( requestID );
    var rectWidth = 600;
    var rectHeight = 400;
    
    var rectX = Math.random() * 500;
    var recty = Math.random() * 500;

    var xVel = 10;
    var yVel = 10;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
        ctx.clearRect(0,0,c.width,c.height);
        //ctx.fillRect(rectx, rectY, rectWidth, rectHeight);
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
        if (rectX = 500) {
            xVel = xVel * -1;
        }
        if (rectY = 500) {
            yVel = yVel * -1;
        }
        rectX = rectX + xVel;
        rectY = rectX + yVel;
        window.cancelAnimationFrame(requestID);
        requestID = window.requestAnimationFrame(dvdLogo);
        };
    dvdLogo();
}

// // drawCircle command taken from k30 with added parameter r
// var drawCircle = (e, r) => {
    // var mouseX = e.offsetX; //gets X-coor of mouse when event is fired
    // var mouseY = e.offsetY; //gets Y-coor of mouse when event is fired
    // console.log("mouseclick registered at ", mouseX, mouseY);
    // ctx.beginPath();
    // ctx.arc(mouseX, mouseY, r, 0, Math.PI * 2);
    // ctx.stroke();
    // ctx.fill();
// };


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
    // ctx.clearRect(0, 0, c.width, c.height);
    clear();
    if(radius === c.height / 2){
        // The circle would have touched the edge
        growing = false;
    }else if (radius === 0){
        // The circle finished contracting
        growing = true;
    }
    if(growing)radius++;
    else radius--;


    ctx.beginPath();
    ctx.arc(c.height/2,c.width/2, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();


    window.cancelAnimationFrame(requestID);
    requestID = window.requestAnimationFrame(drawDot);

}

var stopIt = () => {
    console.log("stopIt invoked");
    console.log( requestID );
    window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdLogoSetup)
stopButton.addEventListener("click", stopIt);
