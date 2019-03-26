// the text of the button will change after the page is loaded because the script is added at the end of the body
document.getElementById("doge").innerHTML = "Woof!";

var button = document.getElementById("doge");
//first we create the icon. The style properties are already set in css file
var dogIcon = document.createElement("img");

//then we add an addEventListener to the button and append the icon in to the button
button.addEventListener("mouseenter", function() {

  dogIcon.src = "dogIcon.png";
  button.innerHTML = "";
  button.appendChild(dogIcon);
});

//for the button to go to it's original state after it was hovered, we add a 'mouseleave' event
button.addEventListener("mouseleave", function() {
  button.innerHTML = "Woof!";
});

// to avoid adding more than one image when we click the button, we create and append the image before the 'click' event
var dogImg = document.createElement("img");
dogImg.src = "doge.png";
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

//Start of animation


dogImg.addEventListener("click", function() {

var catImg = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];
  var nyanSong = new Audio('nyan.mp3');
  document.body.appendChild(nyanSong);
  var cat = new Image(100, 100);
  animate();

function animate(){

cat.src = catImg[Math.floor(Math.random() * 5)];
cat.style.position = "absolute";
x = (Math.floor(Math.random() * 8) * 100) - 500;
y =(Math.floor(Math.random() * 3)+1)*-100;
cat.style.left = x + "%";
cat.style.top = y + "%";
document.body.appendChild(cat);
move();
}

function move(){
  var left = parseInt(cat.style.left, 10);
  var  top = parseInt(cat.style.top, 10);

  var t = setInterval(animate, 5);
function animate(){

if(left>=1000|| top>=1000){
clearInterval(t);

}

++left;
++top;
cat.style.left = left + "px";
cat.style.top = top + "px";
}

}

});
/*var arrCat = [];
var x = 0;
var y = 0;


for (var i = 0; i < 20; ++i) {
  var cat = new Image(100, 100);
  cat.src = catImg[Math.floor(Math.random() * 5)];
  cat.style.position = "absolute";
  x = (Math.floor(Math.random() * 8) * 100) - 500;
  y =(Math.floor(Math.random() * 3)+1)*-100;
  cat.style.left = x + "%";
  cat.style.top = y + "%";
  arrCat.push(cat);
  document.body.appendChild(arrCat[i]);
  console.log(y);

}

for (var i = 0; i < 20; ++i)
  move();
function move(){

var t = setInterval(animate, 100);
var left = parseInt(cat.style.left, 10);
var  top = parseInt(cat.style.top, 10);
function animate() {
  ++left;
  ++top;
  cat.style.left = left + "%";
  cat.style.top = top + "%";
}
}*/
