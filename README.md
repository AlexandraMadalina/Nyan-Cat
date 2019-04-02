This is a class exercise created by our coach [Lambelin Rafael](https://github.com/rafaello104)

## Objectives

- Learn how to target elements
- Learn how to listen to events


## Instructions

Have you ever heard of [Nyan Cat](https://www.google.com/search?q=nyan+cat&oq=nyan+cat+&aqs=chrome..69i57j0l5.1087j0j4&sourceid=chrome&ie=UTF-8)
- Create a button (like you did in the previous exercise)
- When you click the button, it should start raining [Nyan Cats](http://www.stickpng.com/search?q=nyan%20cat&page=1)
(Nyan cat images falling down over 45 degrees, top left to bottom right, start with one)
- Make the rain stop after 10 seconds
- While it's raining Nyan Cats, the [background](https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0439/6605/naynback9_shop_preview.png) should become the one from the original animation and all the other elements should disappear until it's done raining cats ;)
- Where would nyan cat be without the annoying soundtrack on top of it, play the song while it's raining nyan cats

## Bonus Objectives

- Multiply the amount of nyan cats by a random amount
- Randomize the speed of the falling nyan cats
- Randomize the angle (slightly) of the nyan cats
- Randomize the starting position of the nyan cats

(this will make it look more like it's raining nyan cats)



## My approach

I used html to create the button, then Javascript takes control of the animation.The main idea is that every time the button is pressed, a random number of cats is created. I have chosen 5 different pictures for the cats. I change the top, left and transform (rotate) properties with every requestAnimationFrame call. The animation is stopped after 10 seconds with setTimeOut() method.

When the cat reaches the bottom of the screen, function getStartPosition put cats back on top. In this way the program does not have to keep creating cats until the animation is stopped. It makes the program easier to run


You can see the resoults [here](https://alexandramadalina.github.io/Nyan-Cat/)

## Things I learned

* An animation can be implemented as a sequence of frames. For instance, you can use `setInterval` method to to change the properties of an object every  x miliseconds.

`let timer = setInterval(function() {
  if (animation complete) clearInterval(timer);
  else increase style.left by 2px
}, 20); // change by 2px every 20ms, about 50 frames per second`
