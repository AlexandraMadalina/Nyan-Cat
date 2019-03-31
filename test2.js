var button = document.getElementById("clickForMiaw");
button.addEventListener("click", createCat);
var catImg = ["img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png", "img/cat5.png"];


function createCat() {
  var x = Math.round(Math.random() * 70);
  for (i = 0; i <= x; ++i){
    var cat = document.createElement("img");
    cat.src = catImg[Math.round(Math.random() * 4)];
    cat.style.position = "absolute";
    setStartPosition(cat);
    randomSpeed(cat);
    cat.style.transitionTimingFunction = "ease-in";
    cat.classList.add("nyan-cat");
    document.body.appendChild(cat);
    setEndPosition(cat);
  }
  
}



function setStartPosition(obj){
  
  var x = (Math.floor(Math.random() * 7) * 10) - 100;
  var y = (Math.floor(Math.random() * 3) + 1) * -100;
  obj.style.left = x + "vh";
  obj.style.top = y + "vh";
}

function randomSpeed(obj){
var s = Math.floor(Math.random()* 9);
obj.style.transition = "all " + s + "s";

}


function setEndPosition(obj){
  setTimeout(function(){ 
  var x = (Math.floor(Math.random()* 7)*10) +50;
  var y = (Math.floor(Math.random() * 1)+1) * 100;
  var d = Math.floor(Math.random() * 1) * 360;
  obj.style.left = x + "vw";
  obj.style.top = y + "vh";
  obj.style.transform = "rotate(" + d + "deg)";
  console.log(obj.style);
  }, 10);
}