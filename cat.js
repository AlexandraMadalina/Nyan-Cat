var button = document.getElementById("clickForMiaw");
button.addEventListener("click", createCat);

function createCat(){
  
  var catImg = ["img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png", "img/cat5.png"];
  var cat = document.createElement("img");
  cat.src = catImg[Math.round(Math.random() * 4)];
  cat.classList.add("nyan-cat-end");
  document.body.appendChild(cat);
  
}


   
function updateTransition() {
 
  var cat = document.querySelector("img.nyan-cat-start");
   
  if (cat) {
    cat.className = "nyan-cat-end";
  } else {
    cat = document.querySelector("img.nyan-cat-end");
    cat.className = "nyan-cat-start";
  }
  
  return cat;
}

var interval= window.setInterval(updateTransition, 2000);
setTimeout(function(){clearInterval(interval)}, 20000);
