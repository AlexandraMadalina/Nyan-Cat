var button = document.getElementById("clickForMiaw");
button.addEventListener("click", createCat);


var nyanSong = new Audio('nyan.mp3');
function createCat(){
  
  backgroundButtonMusic();
  createCats();

}


function backgroundButtonMusic(){
  button.style.display = "none";
  document.body.style.backgroundImage = "url('img/background.png')";
  document.body.appendChild(nyanSong);
  nyanSong.play();
}
   
function createCats(){

  var catImg = ["img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png", "img/cat5.png"];
  var numberOfCats = Math.floor(Math.random() * 50);
  for(let i = 0; i <= numberOfCats; ++i){
    var cat = document.createElement("img");
    cat.src = catImg[Math.floor(Math.random() * 5)];
    setStartPosition(cat);
    document.body.appendChild(cat);
    cat.classList.add("nyan-cat-start");
  }
  //animate();
}

function setStartPosition(obj){
  var x = (Math.floor(Math.random() * 5) * 10) - 30;
  var y = (Math.floor(Math.random() * 2) *20) -30;
  obj.style.left = x + "vw";
  obj.style.top = y + "vh";
 
}

function animate(obj){
  obj = document.getElementsByClassName("nyan-cat-start");
  setTimeout(function(){
    while (obj[0]) {
      moveCat(obj[0]);
    }
   
  },10);
    
}

function moveCat(obj){
  
  var endPositionX = (Math.floor(Math.random() * 7)*10) +60;
  var endPositionY = (Math.floor(Math.random() * 3)*10) +80;
  var spin = (Math.floor(Math.random() * 97)*10) + 400;
  obj.style.transform = "translate(" + endPositionX + "vw, " + endPositionY + "vh) rotate(" + spin + "deg)";
  obj.style.transition = "all 3s ease-in-out";
  obj.className = "nyan-cat-end"
}



function updateTransition() {
 
  var cat = document.querySelector("img.nyan-cat-start");
   
  if (cat) {
    animate(cat);
   
  } else {
    var cat = document.querySelector("img.nyan-cat-end");
    
    while (cat[0]) {
      cat[0].className = "nyan-cat-start";
    }
  }
  
 // return cat;
}

var interval= window.setInterval(updateTransition, 2000);
setTimeout(function(){clearInterval(interval)}, 20000);
