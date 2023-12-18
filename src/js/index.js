let slideImages = document.querySelectorAll(".myslide1 img");
let slidetxt = document.querySelectorAll(".myslide1 .txt");
let slide2Images = document.querySelectorAll(".myslide img");
let slidetxt2 = document.querySelectorAll(".myslide .txt");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let nexts2 = document.querySelector(".nexts2");
let prevs2 = document.querySelector(".prevs2");

// Access the indicators
let dots = document.querySelectorAll(".dot");
let dots2 = document.querySelectorAll(".dott");

var counter = 0;
var counter2 = 0;

// Code for next button
nexts2.addEventListener("click", slideNext2);
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  slidetxt[counter].style.animation = "next1 0.5s ease-in forwards";

  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  slidetxt[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

function slideNext2() {
    console.log("slideNext2 passed");

    // Check if counter2 is within the valid range
    if (counter2 >= 0 && counter2 < slide2Images.length) {
        console.log("Counter2:", counter2);

        slide2Images[counter2].style.animation = "next21 0.5s ease-in forwards";
        slidetxt2[counter2].style.animation = "next21 0.5s ease-in forwards";

        if (counter2 >= slide2Images.length - 1) {
            counter2 = 0;
        } else {
            counter2++;
        }

        slide2Images[counter2].style.animation = "next22 0.5s ease-in forwards";
        slidetxt2[counter2].style.animation = "next22 0.5s ease-in forwards";

        console.log("New Counter2:", counter2);

        indicators2();
    }
}


// Code for prev button
prev.addEventListener("click", slidePrev);
prevs2.addEventListener("click", slidePrev2);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  slidetxt[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  slidetxt[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}
function slidePrev2() {
    console.log("slidePrev2 passed");
  slide2Images[counter2].style.animation = "prev21 0.5s ease-in forwards";
  slidetxt2[counter2].style.animation = "prev21 0.5s ease-in forwards";
  if (counter2 == 0) {
    counter2 = slide2Images.length - 1;
  } else {
    counter2--;
  }
  slide2Images[counter2].style.animation = "prev22 0.5s ease-in forwards";
  slidetxt2[counter2].style.animation = "prev22 0.5s ease-in forwards";
  indicators2();
}
// Auto slideing
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    slideNext2();
    indicators();
    indicators2();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".ethiopia");
const container2 = document.querySelector(".forign");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});
container2.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);
container2.addEventListener("mouseout", autoSliding);
// Add and remove active class from the indicators
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  

  dots[counter].className += " active";
} 

function indicators2() {
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active2", "");
    }

    // Check if counter2 is within the valid range before updating the class
    if (counter2 >= 0 && counter2 < dots2.length) {
        dots2[counter2].className += " active2";
    }
    console.log("indicators2 passed")
}


// Add click event to the indicator
function switchImage(currentImage) {
  currentImage.classList.add("active");
  var imageId = currentImage.getAttribute("attr");

  if (imageId > counter) {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    slidetxt[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    slidetxt[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    slidetxt[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    slidetxt[counter].style.animation = "prev 0.5s ease-in forwards";
  }
  indicators();
}
function switchImage2(currentImage2) {
    console.log("currentImage2 almost end");
  currentImage2.classList.add("active2");
  var imageId2 = parseInt(currentImage2.getAttribute("attr")); // Parse the attribute value to an integer

  if (imageId2 > counter2) {
    slide2Images[counter2].style.animation = "next21 0.5s ease-in forwards";
    slidetxt2[counter2].style.animation = "next21 0.5s ease-in forwards";
    counter2 = imageId2;
    slide2Images[counter2].style.animation = "next22 0.5s ease-in forwards";
    slidetxt2[counter2].style.animation = "next22 0.5s ease-in forwards";
  } else if (imageId2 == counter2) {
    return;
  } else {
    slide2Images[counter2].style.animation = "prev21 0.5s ease-in forwards";
    slidetxt2[counter2].style.animation = "prev21 0.5s ease-in forwards";
    counter2 = imageId2;
    slide2Images[counter2].style.animation = "prev22 0.5s ease-in forwards";
    slidetxt2[counter2].style.animation = "prev22 0.5s ease-in forwards";
  }
  indicators2();
}
