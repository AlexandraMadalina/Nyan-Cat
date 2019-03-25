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

//we add the click event to dog image to make the animation start when clicking the image
dogImg.addEventListener("click", function() {


  //change background and hide all elements
  document.body.style.backgroundImage = "url('background.png')";
  dogImg.style.display = "none";
  dogIcon.style.display = "none";
  button.style.display = "none";


  var nyanSong = new Audio('nyan.mp3'); //create a audio element
  document.body.appendChild(nyanSong);

  //create a new picture every 100 milliseconds
  var animation = setInterval(makeRain, 100);



  // this arry will give 5 image options
  var catImg = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];

  // var sec will count how many times we have created a new image
  var sec = 0;

  function makeRain() {

    ++sec;

    //we want to stop making images after 10 sec. If a image gets created every 100 milliseconds we need to repeat this process 100 times to have a total of 10 seconds (1 sec = 1000 milliseconds)
    if (sec >= 100) {
      clearInterval(animation);
      document.body.style.backgroundImage = "";
      dogImg.style.display = "block";
      button.style.display = "block";
      nyanSong.pause();

    } else {
      nyanSong.play();
      var cat = new Image(100, 100);
      cat.src = catImg[Math.floor(Math.random() * 5)]; //we'll choose a random picture
      cat.style.position = "absolute";

      // in order for the image to start descending from the position where it was created, we must save the original coordinates. The pictures will be created at a random position above the viewport.

      var x = (Math.floor(Math.random() * 20) * 100) - 500;

      var y = Math.floor(Math.random() * 2) * -100; //the top property will always have a negative value

      cat.style.left = x + "px";
      cat.style.top = y + "px";

      document.body.appendChild(cat);



      var t = setInterval(rain, 5);

      function rain() {
        if (sec >= 100) {
          cat.style.display = "none"; // if we do not hide images after the animation has been stopped, the images will freeze, but will be visible
          clearInterval(rain);
        } else {
          var catImg = document.getElementById('cat');
          var s = Math.floor(Math.random() * 3)+1;
          let left = parseInt(cat.style.left, 10);
          let top = parseInt(cat.style.top, 10);

          cat.style.left = left + s + 'px';
          cat.style.top = top  + s + 'px';
        }
      }

    }
  }

});
