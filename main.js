  //  prevent default
   document.querySelector('body').addEventListener('click', preventDflt);
   function preventDflt(e) {
       var tElment = e.target.getAttribute('href');
       var tElmentP = e.target.parentElement.getAttribute('href');
       if (tElment == '#' || tElmentP == '#') {
           e.preventDefault();
       }
   }


window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () { plusSlides(1) }, 3000);
});


// section 1 slider
let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide1");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

// slider automatic 
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    myTimer = setInterval(function () { plusSlides(n + 2) }, 3000);
  } else {
    myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
  }
}


// section 4 sliders 1

let slideIndexTour1 = 1;
showSlidesTour1(slideIndexTour1);

function currentSlide1(n) {
  showSlidesTour1(slideIndexTour1 = n);
}

function showSlidesTour1(n) {
  let i;
  let slidesTour = document.getElementsByClassName("tour-images1");
  let dotsTour = document.getElementsByClassName("circle1");
  if (n > slidesTour.length) { slideIndexTour1 = 1 }
  if (n < 1) { slideIndexTour1 = slidesTour.length }
  for (i = 0; i < slidesTour.length; i++) {
    slidesTour[i].style.display = "none";
  }
  for (i = 0; i < dotsTour.length; i++) {
    dotsTour[i].className = dotsTour[i].className.replace("active1", "");
  }
  slidesTour[slideIndexTour1 - 1].style.display = "flex";
  dotsTour[slideIndexTour1 - 1].className += " active1";
}

// section 4 sliders 2
let slideIndexTour2 = 1;
showSlidesTour2(slideIndexTour2);

function currentSlide2(n) {
  showSlidesTour2(slideIndexTour2 = n);
}

function showSlidesTour2(n) {
  let i;
  let slidesTour = document.getElementsByClassName("tour-images2");
  let dotsTour = document.getElementsByClassName("circle2");
  if (n > slidesTour.length) { slideIndexTour2 = 1 }
  if (n < 1) { slideIndexTour2 = slidesTour.length }
  for (i = 0; i < slidesTour.length; i++) {
    slidesTour[i].style.display = "none";
  }
  for (i = 0; i < dotsTour.length; i++) {
    dotsTour[i].className = dotsTour[i].className.replace("active2", "");
  }
  slidesTour[slideIndexTour2 - 1].style.display = "flex";
  dotsTour[slideIndexTour2 - 1].className += " active2";
}

// section 4 sliders 3
let slideIndexTour3 = 1;
showSlidesTour3(slideIndexTour3);

function currentSlide3(n) {
  showSlidesTour3(slideIndexTour3 = n);
}

function showSlidesTour3(n) {
  let i;
  let slidesTour = document.getElementsByClassName("tour-images3");
  let dotsTour = document.getElementsByClassName("circle3");
  if (n > slidesTour.length) { slideIndexTour3 = 1 }
  if (n < 1) { slideIndexTour3 = slidesTour.length }
  for (i = 0; i < slidesTour.length; i++) {
    slidesTour[i].style.display = "none";
  }
  for (i = 0; i < dotsTour.length; i++) {
    dotsTour[i].className = dotsTour[i].className.replace("active3", "");
  }
  slidesTour[slideIndexTour3 - 1].style.display = "flex";
  dotsTour[slideIndexTour3 - 1].className += " active3";
}

// section 4 sliders 4
let slideIndexTour4 = 1;
showSlidesTour4(slideIndexTour4);

function currentSlide4(n) {
  showSlidesTour4(slideIndexTour4 = n);
}

function showSlidesTour4(n) {
  let i;
  let slidesTour = document.getElementsByClassName("tour-images4");
  let dotsTour = document.getElementsByClassName("circle4");
  if (n > slidesTour.length) { slideIndexTour4 = 1 }
  if (n < 1) { slideIndexTour4 = slidesTour.length }
  for (i = 0; i < slidesTour.length; i++) {
    slidesTour[i].style.display = "none";
  }
  for (i = 0; i < dotsTour.length; i++) {
    dotsTour[i].className = dotsTour[i].className.replace("active4", "");
  }
  slidesTour[slideIndexTour4 - 1].style.display = "flex";
  dotsTour[slideIndexTour4 - 1].className += " active4";
}


// section 4 links sliders

let slideIndexTourSec = 1;
showSlidesTourSec(slideIndexTourSec);

function currentSlide5(n) {
  showSlidesTourSec(slideIndexTourSec = n);
}

function showSlidesTourSec(n) {
  let i;
  let slidesTourSec = document.getElementsByClassName("section-change");
  let dotsTour = document.getElementsByClassName("section-dot");

  if (n > slidesTourSec.length) { slideIndexTourSec = 1 }
  if (n < 1) { slideIndexTourSec = slidesTourSec.length }
 
  for (i = 0; i < slidesTourSec.length; i++) {
    slidesTourSec[i].style.display = "none";
  }
  for (i = 0; i < dotsTour.length; i++) {
    dotsTour[i].className = dotsTour[i].className.replace("active5", "");
  }
  slidesTourSec[slideIndexTourSec - 1].style.display = "flex";
  dotsTour[slideIndexTourSec - 1].className += " active5";
}

function fun(){
  if(document.getElementById('mail').value!==''){
  document.getElementById('mail').value='';
  document.getElementById("small-e1").style.display="none";
  document.getElementById("small").style.display="block";
 }
 else{
  document.getElementById("small").style.display="none";
  document.getElementById("small-e1").style.display="block";
 }
}

// section 2 left slider
// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("ul.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
//   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }

// section 2 right slider
var toTop = 0;
function autoPlay1(){
  timer = setTimeout(function(){
    var row = document.getElementById('row');
    toTop = toTop - 500;
    if (toTop < -500){
      // toTop = 0;
      // clearTimeout(timer);
      // row.onmouseover = clearTimeout(timer);
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector("#row");
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
      }

  row.style.top = toTop +'px';
  autoPlay1();
  }, 4000);
}
autoPlay1();

// section 2 right slider
var toTop2 = 0;
function autoPlay(){
  timer1 = setTimeout(function(){
    var row = document.getElementById('row2');
    toTop2 = toTop2 - 630;
    if (toTop2 < -630){
      // toTop2 = 0;
      // clearTimeout(timer1);
      // row.onmouseover = clearTimeout(timer1);
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector("#row2");
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
      
      }
  row.style.left = toTop2 +'px';

  autoPlay();
  }, 4000);
}
autoPlay();



