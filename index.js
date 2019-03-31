var button = document.getElementById("clickForMiaw");
button.addEventListener("click", createCat);


// animation


button.addEventListener("click", createCat);
var nyanSong = new Audio('nyan.mp3');

function createCat() {

  backgroundButtonMusic();
  var catImg = ["img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png", "img/cat5.png"];

  var numberOfCats = Math.floor(Math.random() * 50);
  for(let i = 0; i <= numberOfCats; ++i){
    var cat = document.createElement("img");
    cat.src = catImg[Math.floor(Math.random() * 5)];
    cat.style.position = "fixed";
    setStartPosition(cat)
    var speed = (Math.floor(Math.random() * 2)+1);
    cat.speed = speed;
    cat.style.transform = "rotate(0deg)";
    var angle = (Math.floor(Math.random() * 4)+1)*2;
    cat.angle = angle;
    document.body.appendChild(cat);
    cat.classList.add("cats");
  
  }


function backgroundButtonMusic(){
  button.style.display = "none";
  document.body.style.backgroundImage = "url('img/background.png')";
  document.body.appendChild(nyanSong);
  nyanSong.play();
}

function setStartPosition(obj){
  var x = (Math.floor(Math.random() * 5) * 10) - 30;
  var y = (Math.floor(Math.random() * 2) *20) -10;
  obj.style.left = x + "vw";
  obj.style.top = y + "vh";
 
}


var animationLife


function moveAllCats(){
  var cats = document.getElementsByClassName("cats");
  for(let i=0; i<cats.length; ++i){
    moveCat(cats[i]);
  }
animationLife = requestAnimationFrame(moveAllCats);
 
}


requestAnimationFrame(moveAllCats);

function moveCat(cat) {
  
    var oldX = parseInt(cat.style.left, 10);
    var oldY = parseInt(cat.style.top, 10);
    oldX +=cat.speed;
    oldY +=cat.speed;
    cat.style.left = oldX + "vw";
    cat.style.top = oldY + "vh";
    var spin = cat.angle;
    cat.style.transform = "rotate(" + 360 +  oldX*spin + "deg)";
    if(oldY > 100){
    setStartPosition(cat);
    }
  

}

setTimeout(function(){ 
  cancelAnimationFrame(animationLife);
  button.style.display = "block";
  document.body.style.backgroundImage = "";
  nyanSong.pause();
  var flyingCats = document.getElementsByClassName("cats");

  while (flyingCats[0]) {
    flyingCats[0].remove();
  }
 return;
}, 10000);
}
