var button = document.getElementById("clickForMiaw");
button.addEventListener("click", createCat);


// animation


button.addEventListener("click", createCat);

function createCat() {

  button.style.display = "none";
  document.body.style.backgroundImage = "url('img/background.png')";
  var nyanSong = document.createElement('nyan.mp3');
  document.body.appendChild(nyanSong);
  var numberOfCats = Math.floor(Math.random() * 50);
  for(let i = 0; i <= numberOfCats; ++i){
  var catImg = ["img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png", "img/cat5.png"];
  var cat = document.createElement("img");
  cat.src = catImg[Math.floor(Math.random() * 5)];
  cat.style.position = "fixed";
  setStartPosition(cat)
  var speed = (Math.floor(Math.random() * 2)+1);
  cat.speed = speed;
  var angle = (Math.floor(Math.random() * 5)+1)*10;
  cat.angle = angle;
  document.body.appendChild(cat);
  cat.classList.add("cats");
  }
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


setTimeout(function(){ 
  cancelAnimationFrame(animationLife);
  button.style.display = "block";
  document.body.style.backgroundImage = "";
  //nyanSong.pause();
  var flyingCats = document.getElementsByClassName("cats");
  console.log(flyingCats);

  while (flyingCats[0]) {
    flyingCats[0].remove();
  }

  /*for(let i=0; i<flyingCats.length; i++){
    console.log(i);
    flyingCats[i].className = "noMoreCats";
  }
  var noCats = document.getElementsByClassName("noMoreCats");
  console.log(noCats);
   */

}, 10000);


function moveCat(cat) {
  
    var oldX = parseInt(cat.style.left, 10);
    var oldY = parseInt(cat.style.top, 10);
    oldX +=cat.speed;
    oldY +=cat.speed;
    cat.style.left = oldX + "vw";
    cat.style.top = oldY + "vh";
    var rotate = 0;
    rotate += cat.angle;
    cat.style.transform = "rotate(" + rotate + "deg)";
    if(oldY > 100){
    setStartPosition(cat);
    }
  

}