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

function createCat() {
  var numberOfCats = Math.floor(Math.random() * 50);
  console.log(numberOfCats);
  for(let i = 0; i <= numberOfCats; ++i){
  var catImg = ["img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png", "img/cat5.png"];
  var cat = new Image(100, 100);
  cat.src = catImg[Math.floor(Math.random() * 5)];
  cat.style.position = "fixed";
  var x = (Math.floor(Math.random() * 8) * 100) - 500;
  var y = (Math.floor(Math.random() * 3) + 1) * -100;
  cat.style.left = x + "px";
  cat.style.top = y + "px";
  document.body.appendChild(cat);
  cat.classList.add("cats");
  }
}

requestAnimationFrame(moveAllCats);



function moveAllCats(){
  var cats = document.getElementsByClassName("cats");
  for(let i=0; i<cats.length; ++i){
    moveCat(cats[i]);
  }

  requestAnimationFrame(moveAllCats);
}

function moveCat(cat) {

var oldX = parseInt(cat.style.left, 10);
var oldY = parseInt(cat.style.top, 10);
oldX +=3;
oldY +=3;
cat.style.left = oldX + "px";
cat.style.top = oldY + "px";

}