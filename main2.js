// // section 4 links sliders


// window.addEventListener("load", function () {
//   showSlidesTourCard(slideIndexCards);
//   myTimerCard = setInterval(function () { plusSlidesCard(1) }, 4000);
// });

// let slideIndexCards = 1;
// showSlidesTourCard(slideIndexCards);


// function showSlidesTourCard(n) {
//   let i;
//   let slidesTourCard = document.getElementsByClassName("cards");

//   if (n > slidesTourCard.length) { slideIndexCards = 1 }
//   if (n < 1) { slideIndexCards = slidesTourCard.length }
 
//   for (i = 0; i < slidesTourCard.length; i++) {
//     slidesTourCard[i].style.display = "none";
//   }
//   slidesTourCard[slideIndexCards - 1].style.display = "flex";
// }

// function plusSlidesCard(n) {
//   clearInterval(myTimer);
//   if (n < 0) {
//     showSlidesTourCard(slideIndexCards -= 1);
//   } else {
//     showSlidesTourCard(slideIndexCards += 1);
//   }
//   if (n === -1) {
//     myTimerCard = setInterval(function () { plusSlidesCard(n + 2) }, 4000);
//   } else {
//     myTimerCard = setInterval(function () { plusSlidesCard(n + 1) }, 4000);
//   }
// }




