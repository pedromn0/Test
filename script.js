var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnColor1 = document.getElementById("btnColor1");
var btnColor2 = document.getElementById("btnColor2");

body.style.background=setGradient();
css.textContent = body.style.background + "setGradient"; 

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
     + ", "
     + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// My attempt to create a ramdom button which can change ramdomic the background color when it is pressed.

function chageColor(){
x = Math.floor(Math.random() * 256);
y = Math.floor(Math.random() * 256);
z = Math.floor(Math.random() * 256);
var thergb = "rgb(" + x + "," + y + "," + z + ")";
return thergb;
}


// body.background.style=thergb;
// I dind't tried use a gradient which use rgb instead hex as a value for the colors.
// In this case I will try to replace the rgb values from this gradient for function changeColor.

// function setGradientRamdom(){
//     body2.style.background = 
//     "linear-gradient(to right, "
//     + color1.chageColor
//     + ", "
//     + color2.chageColor
//     + ")";

//     css.textContent = body.style.background + ";";
// }

// btnColor1.addEventListener("click", setGradientRamdom);
