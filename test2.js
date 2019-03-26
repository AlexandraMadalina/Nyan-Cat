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


// animation


dogImg.addEventListener("click", createCat);

function createCat() {
  var catImg = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];
  var cat = new Image(100, 100);
  cat.src = catImg[Math.floor(Math.random() * 5)];
  cat.style.position = "absolute";
  x = (Math.floor(Math.random() * 8) * 100) - 500;
  y = (Math.floor(Math.random() * 3) + 1) * -100;
  cat.style.left = x + "px";
  cat.style.top = y + "px";
  document.body.appendChild(cat);
  moveCat(cat);
}

function moveCat(cat) {

  var left = parseInt(cat.style.left, 10);
  var top = parseInt(cat.style.top, 10);
  console.log(top);
  var addTop = top;
  var addLeft = left;

  var t = setInterval(fall(addTop,addLeft), 100);
  var start = Date.now();


  function fall(addTop,addLeft){

    var timePassed = Date.now() - start;
    if (timePassed > 10000) {
      clearInterval(t);
    }
    ++addTop;
    ++addLeft;
      console.log(addTop);
    cat.style.top = addTop + 'px';
    cat.style.top = addLeft + 'px';
    if (addTop > 100){
      cat.style.top = top;
      cat.style.left = left;
    }
  }
}
