// the text of the button will change after the page is loaded because the script is added at the end of the body
document.getElementById("doge").innerHTML = "Woof!";;

var button = document.getElementById("doge");
//first we create the icon. The style properties are already set in css file
let dogIcon = document.createElement("img");

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
dogImg.style.display = "none"; // we set the 'display' property to 'none' sodat it won't be visible until we click the button
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

//we add the click event to dog image to make the animation start when clicking the image
  dogImg.addEventListener("click", function() {


  // this arry will give 5 image options
  var catImg = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];

  // first we are goin to create a new picture every 100 milliseconds
  var animation = setInterval(makeRain, 100);

  // var sec will count how many times we have created a new image
  var sec = 0;

  function makeRain() {

    ++sec;

    //we want to stop making images after 10 sec. If a image gets created every 100 milliseconds we need to repeat this process 100 times to have a total of 10 seconds (1 sec = 1000 milliseconds)
    if (sec >= 100) {
      clearInterval(animation);

    } else {
      var cat = new Image(100, 100);
      cat.src = catImg[Math.floor(Math.random() * 5)]; //we'll choose a random picture
      cat.style.position = "absolute";

      // in order for the image to start descending from the position where it was created, we must save the original coordinates. The pictures will be created at a random position above the viewport.

      let x = (Math.floor(Math.random() * 12) * 100) - 500;// Math.floor will give a number between 0 and 11. I multipyed by 100 so dat the picture wont't be to crowded, and extract 500 so dat we will also get negative values. This way well cover more space and the picture will be more dispers

    let y = Math.floor(Math.random() * 2) * -100; //the top property will always have a negative value

      cat.style.left = x + "px";
      cat.style.top = y + "px";

      document.body.appendChild(cat);

      var s = Math.floor(Math.random() * 3) * 10;// pictures will have random speed

      var t = setInterval(rain, s);

      function rain() {
        if (sec >= 100) {
          cat.style.display = "none";// if we do not hide images after the animation has been stopped, the images will freeze, but will be visible
          clearInterval(rain);
        } else {
          var catImg = document.getElementById('cat');
          ++x;
          ++y;

          cat.style.left = x + 'px';
          cat.style.top = y + 'px';
        }

      }
    }
  }

});
