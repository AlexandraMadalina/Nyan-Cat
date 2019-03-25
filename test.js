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
  let start = Date.now();
  var catImg = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];
  var nyanSong = new Audio('nyan.mp3');
  document.body.appendChild(nyanSong);

  var arrCat = [];
  var x = 0;
  var y = 0;

  for (var i = 0; i < 20; ++i) {
    var cat = new Image(100, 100);
    cat.src = catImg[Math.floor(Math.random() * 5)];
    cat.style.position = "absolute";
    x = (Math.floor(Math.random() * 20) * 100) - 500;
    y = Math.floor(Math.random() * 2) * -100;
    cat.style.left = x + "px";
    cat.style.top = y + "px";
    arrCat.push(cat);
    document.body.appendChild(arrCat[i]);
  }

  var timer = setInterval(animate, 20);

  function animate() {

    let timePassed = Date.now() - start;
    var lef;
    var top;
    for (var i = 0; i < 20; ++i) {
      left = parseInt(arrCat[i].style.left, 10);
      top = parseInt(arrCat[i].style.top, 10);
      //s = Math.floor(Math.random() *3);
      arrCat[i].style.left = left + 1 + (1 / i ) + "px";
      arrCat[i].style.top = top + 1 + (1 / i) + "px";
    }

    if (timePassed >= 10000) {
      clearInterval(timer);
      return;
    }
  }
});
/*

}
dogImg.addEventListener("click", function() {

let start = Date.now();

var catImg = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];


let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  animate(timePassed);

}, 20);

});

function animate(timePassed){

cat.style.left = timePassed / 5 + 'px';

}



function createCar(){


  return cat;
}
let start = Date.now(); // remember start time

let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}*/
