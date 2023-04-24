// Team Keychron k28
// SoftDev pd8
// K29 -- DOMfoolery++ 
// 2023-04-24
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var fibButton = document.getElementById("fib");
fibButton.addEventListener('click', changeFib);

var factButton = document.getElementById("fact");
factButton.addEventListener('click', changeFact);

var gcdButton = document.getElementById("gcd");
gcdButton.addEventListener('click', changeGCD);

//user input

//fib
var fibInputButton = document.getElementById("fib-input");
const fibSubmitButton = document.getElementById("fib-submit");
fibSubmitButton.addEventListener('click', ()=> {
  const n = fibInputButton.value;
  const fibOutput = document.getElementById("fib-output");
  fibOutput.innerHTML = fib(n);

});

//fact
var factInputButton = document.getElementById("fact-input");
const factSubmitButton = document.getElementById("fact-submit");
factSubmitButton.addEventListener('click', ()=> {
  const n = factInputButton.value;
  const factOutput = document.getElementById("fact-output");
  factOutput.innerHTML = fact(n);

});

// gcd
var gcdInputButton = document.getElementById("gcd-input");
var gcdInput2Button = document.getElementById("gcd-input2");

const gcdSubmitButton = document.getElementById("gcd-submit");
gcdSubmitButton.addEventListener('click', ()=> {
  const n = gcdInputButton.value;
  const m = gcdInput2Button.value;
  const gcdOutput = document.getElementById("gcd-output");
  gcdOutput.innerHTML = gcd(n,m);

});



var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };  
        // document.getElementById("li1")  // document.getElementById("li1")
        // document.getElementById("li2")
        // document.getElementById("li3")
        // document.getElementById("li4")
        // document.getElementById("li5")
        // document.getElementById("li6")
        // document.getElementById("li7")
        // document.getElementById("li7")


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
function fib(n) {
    if (n < 2) {
        return n;
    }
    else {
       return fib(n-1) + fib(n-2); 
    }
}


// FAC
function fact(n) {
    if (n < 2) {
        return 1;
    }
    else {
        return n * fact(n-1);
    }
}

// GCD
function gcd(n,m) {
    if (!m) {
        return n;
        }
        
        return gcd(m, n % m);    

}

//EVERYTHING FUNCTION TO CHANGE HTML
function changeFib() {
  // document.getElementById("li0").innerHTML="fib of 1: " + fib(1);
  // document.getElementById("li1").innerHTML="fib of 2: " + fib(2);
  // document.getElementById("li2").innerHTML="fib of 3: " + fib(3);
  // document.getElementById("li3").innerHTML="fib of 4: " + fib(4);
  // document.getElementById("li4").innerHTML="fib of 5: " + fib(5);
  // document.getElementById("li5").innerHTML="fib of 6: " + fib(6);
  // document.getElementById("li6").innerHTML="fib of 7: " + fib(7);
  // document.getElementById("li7").innerHTML="fib of 8: " + fib(8);

  for (var i = 0; i<8; i++) {
    document.getElementById(`li${i}`).innerHTML=`fib of ${i+1}: ` + fib(i+1);
  }
}

function changeFact() {
  // document.getElementById("li0").innerHTML="fact of 1: " + fact(1);
  // document.getElementById("li1").innerHTML="fact of 2: " + fact(2);
  // document.getElementById("li2").innerHTML="fact of 3: " + fact(3);
  // document.getElementById("li3").innerHTML="fact of 4: " + fact(4);
  // document.getElementById("li4").innerHTML="fact of 5: " + fact(5);
  // document.getElementById("li5").innerHTML="fact of 6: " + fact(6);
  // document.getElementById("li6").innerHTML="fact of 7: " + fact(7);
  // document.getElementById("li7").innerHTML="fact of 8: " + fact(8);

  for (var i = 0; i<8; i++) {
    document.getElementById(`li${i}`).innerHTML=`fact of ${i+1}: ` + fact(i+1);
  }
}


function changeGCD() {
  // document.getElementById("li0").innerHTML="gcd of 1 and 20: "+ gcd(1,20);
  // document.getElementById("li1").innerHTML="gcd of 2 and 20: "+ gcd(2,20);
  // document.getElementById("li2").innerHTML="gcd of 3 and 20: "+ gcd(3,20);
  // document.getElementById("li3").innerHTML="gcd of 4 and 20: "+ gcd(4,20);
  // document.getElementById("li4").innerHTML="gcd of 5 and 20: "+ gcd(5,20);
  // document.getElementById("li5").innerHTML="gcd of 6 and 20: "+ gcd(6,20);
  // document.getElementById("li6").innerHTML="gcd of 7 and 20: "+ gcd(7,20);
  // document.getElementById("li7").innerHTML="gcd of 8 and 20: "+ gcd(8,20);

  for (var i = 0; i<8; i++) {
    document.getElementById(`li${i}`).innerHTML=`gcd of ${i+1} and 20: ` + gcd(i+1,20);
  }
}

// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};
