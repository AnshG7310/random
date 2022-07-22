var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-300px";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-300px"){
        sideNav.style.right = "0px";
    }
    else{
        sideNav.style.right = "-300px";
    }
}

// Smooth Scroll Effect 


var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});