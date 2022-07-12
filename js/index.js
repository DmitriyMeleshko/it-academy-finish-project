document.querySelector('.buttonYes').addEventListener('click', () => {
   document.querySelector('.wrapper__modal').style.display = 'none';
})

document.querySelector('.buttonNo').addEventListener('click', () => {
   document.querySelector('.modalText').style.display = 'none';
})

document.querySelector('.buttonNo').addEventListener('click', () => {
   document.querySelector('.modalDanger').style.display = 'block';
})

document.querySelector('.buttonClose').addEventListener('click', () => {
   document.querySelector('.reg__wrapper').style.display = 'none';
})

document.querySelector('.buttonSend').addEventListener('click', (event) => {
   event.preventDefault();

   document.querySelector('.reg__wrapper').style.display = 'none';
})

document.querySelector('.buttonReg').addEventListener('click', () => {
   document.querySelector('.reg__wrapper').style.display = 'flex';
})


var slideIndex = 1;
showSlides(slideIndex);


function plusSlide() {
   showSlides(slideIndex += 1);
}


function minusSlide() {
   showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}


function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("item");
   var dots = document.getElementsByClassName("slider-dots_item");
   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "flex";
   dots[slideIndex - 1].className += " active";
}

