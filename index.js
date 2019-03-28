// the text of the button will change after the page is loaded because the script is added at the end of the body
document.getElementById("doge").innerHTML = "Woof!";

var button = document.getElementById("doge");
//first we create the icon. The style properties are already set in css file
var dogIcon = document.createElement("img");

//then we add an addEventListener to the button and append the icon in to the button
button.addEventListener("mouseenter", function() {

  dogIcon.src = "img/dogIcon.png";
  button.innerHTML = "";
  button.appendChild(dogIcon);
});

//for the button to go to it's original state after it was hovered, we add a 'mouseleave' event
button.addEventListener("mouseleave", function() {
  button.innerHTML = "Woof!";
});

// to avoid adding more than one image when we click the button, we create and append the image before the 'click' event
var dogImg = document.createElement("img");
dogImg.src = "img/doge.png";
dogImg.style.display = "none"; // we set the 'display' property to 'none' so it won't be visible until we click the button
document.body.appendChild(dogImg);

//on click, we switch between the 'display' values
dogIcon.addEventListener("click", function() {

  if (dogImg.style.display == "none") {
    dogImg.style.display = "block";
  } else {
    dogImg.style.display = "none";
  }

});


// animation


dogImg.addEventListener("click", createCat);


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

